<<<<<<< HEAD
import React, { useEffect, useState, useRef } from "react";
import searchIcon from "./icons/search-icon.png";
import closeIcon from "./icons/close-icon.png";
import restroomIcon from "./icons/restroom.png";
import shelterIcon from "./icons/bench.png";
import bicycleIcon from "./icons/bike.png";
import walkingpathIcon from "./icons/walkway.png";
import wishlistIcon from "./icons/heart.png";
import registerPathIcon from "./icons/start_map.png";
import pathListIcon from "./icons/list_map.png";
=======
import React, { useEffect, useState } from "react";
import searchIcon from "./icons/search-icon.png"; // 돋보기 아이콘 추가
import closeIcon from "./icons/close-icon.png"; // x 버튼 추가
import restroomIcon from "./icons/restroom.png"; // 화장실 아이콘 추가
import shelterIcon from "./icons/bench.png"; // 쉼터 아이콘 추가
import bicycleIcon from "./icons/bike.png"; // 자전거 아이콘 추가
import walkingpathIcon from "./icons/walkway.png"; // 산책로 아이콘 추가
import wishlistIcon from "./icons/heart.png"; // 관심목록 아이콘 추가
import registerPathIcon from "./icons/start_map.png"; // 산책로 등록 아이콘 추가
import pathListIcon from "./icons/list_map.png"; // 산책로 목록 아이콘 추가
>>>>>>> 62b47b73e700fc37dcf94a07dc31b2ab85c4ce7c

const deleteClickLine = (clickLineRef) => {
  if (clickLineRef.current) {
    clickLineRef.current.setMap(null);
    clickLineRef.current = null;
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
<<<<<<< HEAD
    <ul class="dotOverlay distanceInfo">
      <li><span class="label">총거리</span><span class="number">${distance}</span>m</li>
      <li><span class="label">도보</span>${walkHour}${walkMin}</li>
    </ul>
  `;
  return { content, walkTime };
};

var MapContainer = () => {
  const [isDrawingEnabled, setIsDrawingEnabled] = useState(false);
  const [distanceInfo, setDistanceInfo] = useState(null);
  const clickLineRef = useRef(null);
=======
      <ul class="dotOverlay distanceInfo">
        <li><span class="label">총거리</span><span class="number">${distance}</span>m</li>
        <li><span class="label">도보</span>${walkHour}${walkMin}</li>
      </ul>
    `;
  return content;
};

const MapContainer = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [map, setMap] = useState(null);
  const [kakao, setKakao] = useState(null);
  const [infowindow, setInfowindow] = useState(null);
>>>>>>> 62b47b73e700fc37dcf94a07dc31b2ab85c4ce7c

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=5d5ff9dea154c6d5d695bc6a31aead6e&libraries=services&autoload=false";
    script.async = true;
    script.onload = () => {
<<<<<<< HEAD
      const { kakao } = window;
      kakao.maps.load(() => {
=======
      window.kakao.maps.load(() => {
        const { kakao } = window;
        setKakao(kakao);

>>>>>>> 62b47b73e700fc37dcf94a07dc31b2ab85c4ce7c
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
<<<<<<< HEAD
        var map = new kakao.maps.Map(container, options);
=======
        const map = new kakao.maps.Map(container, options);
        setMap(map);

        const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
        setInfowindow(infowindow);
>>>>>>> 62b47b73e700fc37dcf94a07dc31b2ab85c4ce7c

        let drawingFlag = false;
        let moveLine, distanceOverlay;
        let dots = [];

        kakao.maps.event.addListener(map, "click", function (mouseEvent) {
          if (!isDrawingEnabled) return;

          const clickPosition = mouseEvent.latLng;

          if (!drawingFlag) {
            drawingFlag = true;
            deleteClickLine(clickLineRef);
            distanceOverlay = deleteDistance(distanceOverlay);
            dots = deleteCircleDot(dots);

            clickLineRef.current = new kakao.maps.Polyline({
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
          } else if (clickLineRef.current) {
            var path = clickLineRef.current.getPath();
            path.push(clickPosition);
            clickLineRef.current.setPath(path);

            const distance = Math.round(clickLineRef.current.getLength());
            dots = displayCircleDot(kakao, map, clickPosition, distance, dots);
          }
        });

        kakao.maps.event.addListener(map, "mousemove", function (mouseEvent) {
          if (!isDrawingEnabled || !drawingFlag || !clickLineRef.current) return;

          var mousePosition = mouseEvent.latLng;
          var path = clickLineRef.current.getPath();
          var movepath = [path[path.length - 1], mousePosition];
          moveLine.setPath(movepath);
          moveLine.setMap(map);

          const distance = Math.round(
            clickLineRef.current.getLength() + moveLine.getLength()
          );
          const content = `<div class="dotOverlay distanceInfo">총거리 <span class="number">${distance}</span>m</div>`;
          distanceOverlay = showDistance(
            kakao,
            map,
            distanceOverlay,
            content,
            mousePosition
          );
        });

        kakao.maps.event.addListener(map, "rightclick", function () {
          if (!isDrawingEnabled || !drawingFlag) return;

          moveLine.setMap(null);
          moveLine = null;

          if (clickLineRef.current) {
            var path = clickLineRef.current.getPath();

            if (path.length > 1) {
              if (dots[dots.length - 1].distance) {
                dots[dots.length - 1].distance.setMap(null);
                dots[dots.length - 1].distance = null;
              }

              const distance = Math.round(clickLineRef.current.getLength());
              const { content, walkTime } = getTimeHTML(distance);
              distanceOverlay = showDistance(
                kakao,
                map,
                distanceOverlay,
                content,
                path[path.length - 1]
              );

              setDistanceInfo({
                totalDistance: distance,
                walkTime: walkTime,
              });
            } else {
              deleteClickLine(clickLineRef);
              dots = deleteCircleDot(dots);
              distanceOverlay = deleteDistance(distanceOverlay);
            }
            drawingFlag = false;
          }
        });

        document
          .getElementById("savePath")
          .addEventListener("click", function () {
            if (clickLineRef.current) {
              const path = clickLineRef.current.getPath().map((latlng) => ({
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
              alert("저장할 경로가 없습니다!");
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
      });
    };
    script.onerror = () => {
      console.error("Kakao Maps API 스크립트를 로드하는 데 실패했습니다.");
    };
    document.head.appendChild(script);
  }, [isDrawingEnabled]);

  const handleCategoryClick = (category) => {
    console.log(`${category} 카테고리 클릭됨`);
  };

  const handleRegisterPathClick = () => {
    if (isDrawingEnabled && clickLineRef.current) {
      const path = clickLineRef.current.getPath().map((latlng) => ({
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

      if (distanceInfo) {
        console.log("totalDistance:", distanceInfo.totalDistance, "m");
        console.log("walkTime:", distanceInfo.walkTime);
      }
    }
    setIsDrawingEnabled((prev) => !prev);
    console.log("산책로 등록 클릭됨");
  };

  const handlePathListClick = () => {
    console.log("산책로 목록 클릭됨");
  };

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (!kakao || !map) return;

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchKeyword, (data, status, pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    });
  };

  const displayMarker = (place) => {
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    });

    kakao.maps.event.addListener(marker, "click", function () {
      infowindow.setContent(
        `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`
      );
      infowindow.open(map, marker);
    });
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
            value={searchKeyword}
            onChange={handleSearchChange}
          />
          <img
            src={closeIcon}
            alt="close"
            className="close-icon"
            onClick={() => setSearchKeyword("")}
          />
          <button onClick={handleSearchSubmit}>검색</button>
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
