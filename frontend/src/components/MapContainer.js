import React, { useEffect } from "react";
import searchIcon from "./icons/search-icon.png"; // 돋보기 아이콘 추가
import closeIcon from "./icons/close-icon.png"; // x 버튼 추가
import restroomIcon from "./icons/restroom.png"; // 화장실 아이콘 추가
import shelterIcon from "./icons/bench.png"; // 쉼터 아이콘 추가
import bicycleIcon from "./icons/bike.png"; // 자전거 아이콘 추가
import walkingpathIcon from "./icons/walkway.png"; // 산책로 아이콘 추가
import wishlistIcon from "./icons/heart.png"; // 관심목록 아이콘 추가
import registerPathIcon from "./icons/start_map.png"; // 산책로 등록 아이콘 추가
import pathListIcon from "./icons/list_map.png"; // 산책로 목록 아이콘 추가

const deleteClickLine = (clickLine) => {
  if (clickLine) {
    clickLine.setMap(null);
    clickLine = null;
  }
};

const showDistance = (kakao, map, distanceOverlay, content, position) => {
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
      zIndex: 3,
    });
  }
  return distanceOverlay;
};

const deleteDistance = (distanceOverlay) => {
  if (distanceOverlay) {
    distanceOverlay.setMap(null);
    distanceOverlay = null;
  }
  return distanceOverlay;
};

const displayCircleDot = (kakao, map, position, distance, dots) => {
  const circleOverlay = new kakao.maps.CustomOverlay({
    content: '<span class="dot"></span>',
    position: position,
    zIndex: 1,
  });
  circleOverlay.setMap(map);

  let distanceOverlay = null;
  if (distance > 0) {
    distanceOverlay = new kakao.maps.CustomOverlay({
      content: `<div class="dotOverlay">거리 <span class="number">${distance}</span>m</div>`,
      position: position,
      yAnchor: 1,
      zIndex: 2,
    });
    distanceOverlay.setMap(map);
  }
  dots.push({ circle: circleOverlay, distance: distanceOverlay });
  return dots;
};

const deleteCircleDot = (dots) => {
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].circle) {
      dots[i].circle.setMap(null);
    }
    if (dots[i].distance) {
      dots[i].distance.setMap(null);
    }
  }
  dots = [];
  return dots;
};

const getTimeHTML = (distance) => {
  const walkTime = (distance / 67) | 0;
  let walkHour = "",
    walkMin = "";

  if (walkTime > 60) {
    walkHour = `<span class="number">${Math.floor(walkTime / 60)}</span>시간 `;
  }
  walkMin = `<span class="number">${walkTime % 60}</span>분`;

  const content = `
    <ul class="dotOverlay distanceInfo">
      <li><span class="label">총거리</span><span class="number">${distance}</span>m</li>
      <li><span class="label">도보</span>${walkHour}${walkMin}</li>
    </ul>
  `;
  return content;
};

const MapContainer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=313889b8957c7467ade6065e3c37385f";
    script.async = true;
    script.onload = () => {
      const { kakao } = window;
      if (kakao && kakao.maps) {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);

        // Drawing Path Variables
        let drawingFlag = false;
        let moveLine, clickLine, distanceOverlay;
        let dots = [];

        kakao.maps.event.addListener(map, "click", function (mouseEvent) {
          const clickPosition = mouseEvent.latLng;

          if (!drawingFlag) {
            drawingFlag = true;
            deleteClickLine(clickLine);
            distanceOverlay = deleteDistance(distanceOverlay);
            dots = deleteCircleDot(dots);

            clickLine = new kakao.maps.Polyline({
              map: map,
              path: [clickPosition],
              strokeWeight: 3,
              strokeColor: "#db4040",
              strokeOpacity: 1,
              strokeStyle: "solid",
            });

            moveLine = new kakao.maps.Polyline({
              strokeWeight: 3,
              strokeColor: "#db4040",
              strokeOpacity: 0.5,
              strokeStyle: "solid",
            });

            dots = displayCircleDot(kakao, map, clickPosition, 0, dots);
          } else {
            const path = clickLine.getPath();
            path.push(clickPosition);
            clickLine.setPath(path);

            const distance = Math.round(clickLine.getLength());
            dots = displayCircleDot(kakao, map, clickPosition, distance, dots);
          }
        });

        kakao.maps.event.addListener(map, "mousemove", function (mouseEvent) {
          if (drawingFlag) {
            const mousePosition = mouseEvent.latLng;
            const path = clickLine.getPath();
            const movepath = [path[path.length - 1], mousePosition];
            moveLine.setPath(movepath);
            moveLine.setMap(map);

            const distance = Math.round(
              clickLine.getLength() + moveLine.getLength()
            );
            const content = `<div class="dotOverlay distanceInfo">총거리 <span class="number">${distance}</span>m</div>`;
            distanceOverlay = showDistance(
              kakao,
              map,
              distanceOverlay,
              content,
              mousePosition
            );
          }
        });

        kakao.maps.event.addListener(map, "rightclick", function () {
          if (drawingFlag) {
            moveLine.setMap(null);
            moveLine = null;

            const path = clickLine.getPath();

            if (path.length > 1) {
              if (dots[dots.length - 1].distance) {
                dots[dots.length - 1].distance.setMap(null);
                dots[dots.length - 1].distance = null;
              }

              const distance = Math.round(clickLine.getLength());
              const content = getTimeHTML(distance);
              distanceOverlay = showDistance(
                kakao,
                map,
                distanceOverlay,
                content,
                path[path.length - 1]
              );
            } else {
              deleteClickLine(clickLine);
              dots = deleteCircleDot(dots);
              distanceOverlay = deleteDistance(distanceOverlay);
            }
            drawingFlag = false;
          }
        });

        document
          .getElementById("savePath")
          .addEventListener("click", function () {
            if (clickLine) {
              const path = clickLine.getPath().map((latlng) => ({
                lat: latlng.getLat(),
                lng: latlng.getLng(),
              }));

              const xhr = new XMLHttpRequest();
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

        document
          .getElementById("loadPaths")
          .addEventListener("click", function () {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "/api/paths/load_paths", true);
            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status === 200) {
                const paths = JSON.parse(xhr.responseText);
                paths.forEach((path) => {
                  const pathArray = JSON.parse(path).map(
                    (coord) => new kakao.maps.LatLng(coord.lat, coord.lng)
                  );
                  const polyline = new kakao.maps.Polyline({
                    map: map,
                    path: pathArray,
                    strokeWeight: 3,
                    strokeColor: "#db4040",
                    strokeOpacity: 1,
                    strokeStyle: "solid",
                  });
                });
              }
            };
            xhr.send();
          });

        // 예시 마커 데이터
        const positions = [
          { title: "Marker1", latlng: new kakao.maps.LatLng(37.5665, 126.978) },
          { title: "Marker2", latlng: new kakao.maps.LatLng(37.5655, 126.977) },
        ];

        positions.forEach((position) => {
          const marker = new kakao.maps.Marker({
            map: map,
            position: position.latlng,
            title: position.title,
          });
        });
      } else {
        console.error("Kakao Maps API failed to load.");
      }
    };
    script.onerror = () => {
      console.error("Failed to load the Kakao Maps API script.");
    };
    document.head.appendChild(script);
  }, []);

  const handleCategoryClick = (category) => {
    // 카테고리 클릭 시의 로직을 추가합니다.
    console.log(`${category} 카테고리 클릭됨`);
  };

  const handleRegisterPathClick = () => {
    console.log("산책로 등록 클릭됨");
  };

  const handlePathListClick = () => {
    console.log("산책로 목록 클릭됨");
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <div className="search-container">
        <div className="search-input-wrapper">
          <img src={searchIcon} alt="search" className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="검색어를 입력하세요."
          />
          <img src={closeIcon} alt="close" className="close-icon" />
        </div>
        <div className="category-container">
          <button
            className="category-btn"
            onClick={() => handleCategoryClick("restroom")}
          >
            <img src={restroomIcon} alt="화장실" />
            화장실
          </button>
          <button
            className="category-btn"
            onClick={() => handleCategoryClick("shelter")}
          >
            <img src={shelterIcon} alt="쉼터" />
            쉼터
          </button>
          <button
            className="category-btn"
            onClick={() => handleCategoryClick("bicycle")}
          >
            <img src={bicycleIcon} alt="자전거" />
            자전거
          </button>
          <button
            className="category-btn"
            onClick={() => handleCategoryClick("walkingpath")}
          >
            <img src={walkingpathIcon} alt="산책로" />
            산책로
          </button>
          <button
            className="category-btn"
            onClick={() => handleCategoryClick("wishlist")}
          >
            <img src={wishlistIcon} alt="관심목록" />
            관심목록
          </button>
        </div>
      </div>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
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
      <button id="savePath" style={{ display: "none" }}>
        Save Path
      </button>
      <button id="loadPaths" style={{ display: "none" }}>
        Load Paths
      </button>
    </div>
  );
};

export default MapContainer;
