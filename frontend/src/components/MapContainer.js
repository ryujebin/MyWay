import React, { useEffect } from 'react';
import searchIcon from './icons/search-icon.png'; // 돋보기 아이콘 추가
import closeIcon from './icons/close-icon.png'; // x 버튼 추가
import restroomIcon from './icons/restroom.png'; // 화장실 아이콘 추가
import shelterIcon from './icons/bench.png'; // 쉼터 아이콘 추가
import bicycleIcon from './icons/bike.png'; // 자전거 아이콘 추가
import walkingpathIcon from './icons/walkway.png'; // 산책로 아이콘 추가
import wishlistIcon from './icons/heart.png'; // 관심목록 아이콘 추가
import registerPathIcon from './icons/start_map.png'; // 산책로 등록 아이콘 추가
import pathListIcon from './icons/list_map.png'; // 산책로 목록 아이콘 추가

var MapContainer = () => {
  useEffect(() => {
    var script = document.createElement('script');
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=313889b8957c7467ade6065e3c37385f";
    script.async = true;
    script.onload = () => {
      var { kakao } = window;
      if (kakao && kakao.maps) {
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(37.5665, 126.9780),
          level: 3,
        };
        var map = new kakao.maps.Map(container, options);

        // Drawing Path Variables
        let drawingFlag = false;
        let moveLine, clickLine, distanceOverlay;
        let dots = [];

        kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
          var clickPosition = mouseEvent.latLng;

          if (!drawingFlag) {
            drawingFlag = true;
            deleteClickLine();
            deleteDistance();
            deleteCircleDot();

            clickLine = new kakao.maps.Polyline({
              map: map,
              path: [clickPosition],
              strokeWeight: 3,
              strokeColor: '#db4040',
              strokeOpacity: 1,
              strokeStyle: 'solid'
            });

            moveLine = new kakao.maps.Polyline({
              strokeWeight: 3,
              strokeColor: '#db4040',
              strokeOpacity: 0.5,
              strokeStyle: 'solid'
            });

            displayCircleDot(clickPosition, 0);
          } else {
            var path = clickLine.getPath();
            path.push(clickPosition);
            clickLine.setPath(path);

            var distance = Math.round(clickLine.getLength());
            displayCircleDot(clickPosition, distance);
          }
        });

        kakao.maps.event.addListener(map, 'mousemove', function (mouseEvent) {
          if (drawingFlag) {
            var mousePosition = mouseEvent.latLng;
            var path = clickLine.getPath();
            var movepath = [path[path.length - 1], mousePosition];
            moveLine.setPath(movepath);
            moveLine.setMap(map);

            var distance = Math.round(clickLine.getLength() + moveLine.getLength());
            var content = `<div class="dotOverlay distanceInfo">총거리 <span class="number">${distance}</span>m</div>`;
            showDistance(content, mousePosition);
          }
        });

        kakao.maps.event.addListener(map, 'rightclick', function () {
          if (drawingFlag) {
            moveLine.setMap(null);
            moveLine = null;

            var path = clickLine.getPath();

            if (path.length > 1) {
              if (dots[dots.length - 1].distance) {
                dots[dots.length - 1].distance.setMap(null);
                dots[dots.length - 1].distance = null;
              }

              var distance = Math.round(clickLine.getLength());
              var content = getTimeHTML(distance);
              showDistance(content, path[path.length - 1]);
            } else {
              deleteClickLine();
              deleteCircleDot();
              deleteDistance();
            }
            drawingFlag = false;
          }
        });

        function deleteClickLine() {
          if (clickLine) {
            clickLine.setMap(null);
            clickLine = null;
          }
        }

        function showDistance(content, position) {
          if (distanceOverlay) {
            distanceOverlay.setPosition(position);
            distanceOverlay.setContent(content);
          } else {
            distanceOverlay = new kakao.maps.CustomOverlay({
              map: map,
              content: content,
              position: position,
              xAnchor: 0,
              yAnchor: 0,
              zIndex: 3
            });
          }
        }

        function deleteDistance() {
          if (distanceOverlay) {
            distanceOverlay.setMap(null);
            distanceOverlay = null;
          }
        }

        function displayCircleDot(position, distance) {
          var circleOverlay = new kakao.maps.CustomOverlay({
            content: '<span class="dot"></span>',
            position: position,
            zIndex: 1
          });
          circleOverlay.setMap(map);

          if (distance > 0) {
            var distanceOverlay = new kakao.maps.CustomOverlay({
              content: `<div class="dotOverlay">거리 <span class="number">${distance}</span>m</div>`,
              position: position,
              yAnchor: 1,
              zIndex: 2
            });
            distanceOverlay.setMap(map);
          }
          dots.push({ circle: circleOverlay, distance: distanceOverlay });
        }

        function deleteCircleDot() {
          for (let i = 0; i < dots.length; i++) {
            if (dots[i].circle) {
              dots[i].circle.setMap(null);
            }
            if (dots[i].distance) {
              dots[i].distance.setMap(null);
            }
          }
          dots = [];
        }

        function getTimeHTML(distance) {
          var walkTime = distance / 67 | 0;
          let walkHour = '', walkMin = '';

          if (walkTime > 60) {
            walkHour = `<span class="number">${Math.floor(walkTime / 60)}</span>시간 `;
          }
          walkMin = `<span class="number">${walkTime % 60}</span>분`;

          var content = `
            <ul class="dotOverlay distanceInfo">
              <li><span class="label">총거리</span><span class="number">${distance}</span>m</li>
              <li><span class="label">도보</span>${walkHour}${walkMin}</li>
            </ul>
          `;
          return content;
        }

        document.getElementById('savePath').addEventListener('click', function () {
          if (clickLine) {
            var path = clickLine.getPath().map(latlng => ({ lat: latlng.getLat(), lng: latlng.getLng() }));

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/api/paths/save_path", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status === 200) {
                alert(xhr.responseText);
              }
            };
            xhr.send(JSON.stringify({ path: JSON.stringify(path) }));
          } else {
            alert("No path to save!");
          }
        });

        document.getElementById('loadPaths').addEventListener('click', function () {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", "/api/paths/load_paths", true);
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
              var paths = JSON.parse(xhr.responseText);
              paths.forEach(path => {
                var pathArray = JSON.parse(path).map(coord => new kakao.maps.LatLng(coord.lat, coord.lng));
                var polyline = new kakao.maps.Polyline({
                  map: map,
                  path: pathArray,
                  strokeWeight: 3,
                  strokeColor: '#db4040',
                  strokeOpacity: 1,
                  strokeStyle: 'solid'
                });
              });
            }
          };
          xhr.send();
        });

        // 예시 마커 데이터
        var positions = [
          { title: 'Marker1', latlng: new kakao.maps.LatLng(37.5665, 126.9780) },
          { title: 'Marker2', latlng: new kakao.maps.LatLng(37.5655, 126.9770) },
        ];

        positions.forEach(position => {
          var marker = new kakao.maps.Marker({
            map: map,
            position: position.latlng,
            title: position.title,
          });
        });
      } else {
        console.error('Kakao Maps API failed to load.');
      }
    };
    script.onerror = () => {
      console.error('Failed to load the Kakao Maps API script.');
    };
    document.head.appendChild(script);
  }, []);

  var handleCategoryClick = (category) => {
    // 카테고리 클릭 시의 로직을 추가합니다.
    console.log(`${category} 카테고리 클릭됨`);
  };

  var handleRegisterPathClick = () => {
    console.log('산책로 등록 클릭됨');
  };

  var handlePathListClick = () => {
    console.log('산책로 목록 클릭됨');
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <div className="search-container">
        <div className="search-input-wrapper">
          <img src={searchIcon} alt="search" className="search-icon" />
          <input type="text" className="search-input" placeholder="검색어를 입력하세요." />
          <img src={closeIcon} alt="close" className="close-icon" />
        </div>
        <div className="category-container">
          <button className="category-btn" onClick={() => handleCategoryClick('restroom')}>
            <img src={restroomIcon} alt="화장실" />
            화장실
          </button>
          <button className="category-btn" onClick={() => handleCategoryClick('shelter')}>
            <img src={shelterIcon} alt="쉼터" />
            쉼터
          </button>
          <button className="category-btn" onClick={() => handleCategoryClick('bicycle')}>
            <img src={bicycleIcon} alt="자전거" />
            자전거
          </button>
          <button className="category-btn" onClick={() => handleCategoryClick('walkingpath')}>
            <img src={walkingpathIcon} alt="산책로" />
            산책로
          </button>
          <button className="category-btn" onClick={() => handleCategoryClick('wishlist')}>
            <img src={wishlistIcon} alt="관심목록" />
            관심목록
          </button>
        </div>
      </div>
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
      <div className="bottom-container">
        <button className="bottom-btn" onClick={handleRegisterPathClick}>
          <img src={registerPathIcon} alt="산책로 등록" />
          산책로 등록 시작 / 종료
        </button>
        <button className="bottom-btn" onClick={handlePathListClick}>
          <img src={pathListIcon} alt="산책로 목록" />
          산책로 목록
        </button>
      </div>
      <button id="savePath" style={{ display: 'none' }}>Save Path</button>
      <button id="loadPaths" style={{ display: 'none' }}>Load Paths</button>
    </div>
  );
};

export default MapContainer;
