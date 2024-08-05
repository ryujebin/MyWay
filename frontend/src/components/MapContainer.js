import React, { useEffect, useState } from "react";
import axios from "axios"; // API 호출을 위한 axios import
import searchIcon from "./icons/search-icon.png";
import closeIcon from "./icons/close-icon.png";
import restroomIcon from "./icons/restroom.png";
import shelterIcon from "./icons/bench.png";
import bicycleIcon from "./icons/bike.png";
import walkingpathIcon from "./icons/walkway.png";
import wishlistIcon from "./icons/heart.png";
import registerPathIcon from "./icons/start_map.png";
import pathListIcon from "./icons/list_map.png";

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
  const [selectedPath, setSelectedPath] = useState(null); // 선택된 경로 상태

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=313889b8957c7467ade6065e3c37385f";
    script.async = true;
    script.onload = () => {
      var { kakao } = window;
      if (kakao && kakao.maps) {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
        var map = new kakao.maps.Map(container, options);

        // 경로 그리기 변수
        let drawingFlag = false;
        let moveLine, clickLine, distanceOverlay;
        let dots = [];

        // 맵 클릭 이벤트 핸들러
        kakao.maps.event.addListener(map, "click", function (mouseEvent) {
          const clickPosition = mouseEvent.latLng;

          if (!drawingFlag) {
            // 새로운 경로 그리기 시작
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
            // 경로에 새로운 점 추가
            var path = clickLine.getPath();
            path.push(clickPosition);
            clickLine.setPath(path);

            const distance = Math.round(clickLine.getLength());
            dots = displayCircleDot(kakao, map, clickPosition, distance, dots);
          }
        });

        // 마우스 이동 이벤트 핸들러
        kakao.maps.event.addListener(map, "mousemove", function (mouseEvent) {
          if (drawingFlag) {
            var mousePosition = mouseEvent.latLng;
            var path = clickLine.getPath();
            var movepath = [path[path.length - 1], mousePosition];
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

        // 오른쪽 클릭 이벤트 핸들러
        kakao.maps.event.addListener(map, "rightclick", function () {
          if (drawingFlag) {
            moveLine.setMap(null);
            moveLine = null;

            var path = clickLine.getPath();

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

        // 경로 저장 버튼 클릭 이벤트 핸들러
        document
          .getElementById("savePath")
          .addEventListener("click", function () {
            if (clickLine) {
              const path = clickLine.getPath().map((latlng) => ({
                lat: latlng.getLat(),
                lng: latlng.getLng(),
              }));

              axios
                .post("/api/paths/save_path", { path: JSON.stringify(path) })
                .then((response) => {
                  alert(response.data);
                })
                .catch((error) => {
                  console.error("Error saving path:", error);
                });
            } else {
              alert("저장할 경로가 없습니다!");
            }
          });

        // 산책로 목록 버튼 클릭 이벤트 핸들러
        document
          .getElementById("pathListButton")
          .addEventListener("click", function () {
            console.log("산책로 목록 버튼 클릭됨"); // 로그 출력
            axios
              .get("/api/paths/load_paths")
              .then((response) => {
                const paths = response.data;
                console.log("로드된 경로 데이터:", paths); // 로그 출력
                paths.forEach((path) => {
                  const pathArray = path.path
                    ? JSON.parse(path.path).map(
                        (coord) => new kakao.maps.LatLng(coord.lat, coord.lng)
                      )
                    : [new kakao.maps.LatLng(37.5665, 126.978)]; // 기본 위치 설정

                  new kakao.maps.Polyline({
                    map: map,
                    path: pathArray,
                    strokeWeight: 3,
                    strokeColor: "#db4040",
                    strokeOpacity: 1,
                    strokeStyle: "solid",
                  });

                  // 각 경로에 대한 마커 추가
                  const markerImage = new kakao.maps.MarkerImage(
                    path.image || "default-image-path.png", // 기본 이미지 설정
                    new kakao.maps.Size(50, 50), // 크기 조정
                    { offset: new kakao.maps.Point(25, 25) }
                  );

                  const marker = new kakao.maps.Marker({
                    map: map,
                    position: pathArray[0],
                    title: path.title || "정보 없음",
                    image: markerImage,
                  });

                  console.log("추가된 마커:", marker); // 로그 출력

                  kakao.maps.event.addListener(marker, "click", () => {
                    console.log("마커 클릭됨:", path); // 로그 출력
                    setSelectedPath({
                      ...path,
                      title: path.title || "정보 없음",
                      description: path.description || "설명이 없습니다.",
                      hashtags: path.hashtags || "",
                      distance: path.distance || "정보 없음",
                      kcal: path.kcal || "정보 없음",
                      time: path.time || "정보 없음",
                      image: path.image || "default-image-path.png", // 기본 이미지 설정
                    });
                  });
                });
              })
              .catch((error) => {
                console.error("경로 로드 중 오류 발생:", error);
              });
          });
      } else {
        console.error("카카오 맵 API 로드 실패.");
      }
    };
    script.onerror = () => {
      console.error("카카오 맵 API 스크립트 로드 실패.");
    };
    document.head.appendChild(script);
  }, []);

  // 카테고리 버튼 클릭 핸들러
  const handleCategoryClick = (category) => {
    console.log(`${category} 카테고리 클릭됨`);
  };

  // 산책로 등록 버튼 클릭 핸들러
  const handleRegisterPathClick = () => {
    console.log("산책로 등록 클릭됨");
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
        <button className="bottom-btn" id="pathListButton">
          <img src={pathListIcon} alt="산책로 목록" />
          산책로 목록
        </button>
      </div>
      <button id="savePath" style={{ display: "none" }}>
        Save Path
      </button>
      {selectedPath && (
        <div className="path-details">
          <img
            src={selectedPath.image}
            alt={selectedPath.title}
            className="path-image"
          />
          <div className="path-info">
            <h3>{selectedPath.title}</h3>
            <p>{selectedPath.description}</p>
            <p>{selectedPath.hashtags}</p>
            <p>{selectedPath.distance}km</p>
            <p>{selectedPath.kcal}kcal</p>
            <p>{selectedPath.time}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapContainer;
