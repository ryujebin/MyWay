import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import axios from "axios"; // API 호출을 위한 axios import
=======
>>>>>>> 59b8dedf4fdf32f6f9911c02b639cd5fe9b5351d
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

const getTimeInMinutes = (distance) => {
  return Math.round(distance / 67);
};

const MapContainer = () => {
<<<<<<< HEAD
  const [selectedPath, setSelectedPath] = useState(null); // 선택된 경로 상태
=======
  const [isDrawingEnabled, setIsDrawingEnabled] = useState(false);
  const [clickLine, setClickLine] = useState(null);
  const [moveLine, setMoveLine] = useState(null);
  const [distanceOverlay, setDistanceOverlay] = useState(null);
  const [dots, setDots] = useState([]);
  const [totalDistance, setTotalDistance] = useState(0);
  const [walkTime, setWalkTime] = useState(0);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [currCategory, setCurrCategory] = useState('');
>>>>>>> 59b8dedf4fdf32f6f9911c02b639cd5fe9b5351d

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=KAKAO_KEY&libraries=services";
    script.async = true;
    script.onload = () => {
      var { kakao } = window;
      if (kakao && kakao.maps) {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);
        setMap(map);

<<<<<<< HEAD
        // 경로 그리기 변수
=======
>>>>>>> 59b8dedf4fdf32f6f9911c02b639cd5fe9b5351d
        let drawingFlag = false;
        let localClickLine = null;
        let localMoveLine = null;
        let localDistanceOverlay = null;
        let localDots = [];

        // 맵 클릭 이벤트 핸들러
        kakao.maps.event.addListener(map, "click", function (mouseEvent) {
          if (!isDrawingEnabled) return;

          const clickPosition = mouseEvent.latLng;

          if (!drawingFlag) {
            // 새로운 경로 그리기 시작
            drawingFlag = true;
            deleteClickLine(localClickLine);
            localDistanceOverlay = deleteDistance(localDistanceOverlay);
            localDots = deleteCircleDot(localDots);

            localClickLine = new kakao.maps.Polyline({
              map: map,
              path: [clickPosition],
              strokeWeight: 3,
              strokeColor: "#db4040",
              strokeOpacity: 1,
              strokeStyle: "solid",
            });
            setClickLine(localClickLine);

            localMoveLine = new kakao.maps.Polyline({
              strokeWeight: 3,
              strokeColor: "#db4040",
              strokeOpacity: 0.5,
              strokeStyle: "solid",
            });
            setMoveLine(localMoveLine);

            localDots = displayCircleDot(kakao, map, clickPosition, 0, localDots);
            setDots(localDots);
          } else {
<<<<<<< HEAD
            // 경로에 새로운 점 추가
            var path = clickLine.getPath();
=======
            var path = localClickLine.getPath();
>>>>>>> 59b8dedf4fdf32f6f9911c02b639cd5fe9b5351d
            path.push(clickPosition);
            localClickLine.setPath(path);

            const distance = Math.round(localClickLine.getLength());
            localDots = displayCircleDot(kakao, map, clickPosition, distance, localDots);
            setDots(localDots);
          }
        });

        // 마우스 이동 이벤트 핸들러
        kakao.maps.event.addListener(map, "mousemove", function (mouseEvent) {
          if (!isDrawingEnabled || !drawingFlag) return;

          var mousePosition = mouseEvent.latLng;
          var path = localClickLine.getPath();
          var movepath = [path[path.length - 1], mousePosition];
          localMoveLine.setPath(movepath);
          localMoveLine.setMap(map);

          const distance = Math.round(
            localClickLine.getLength() + localMoveLine.getLength()
          );
          const content = `<div class="dotOverlay distanceInfo">총거리 <span class="number">${distance}</span>m</div>`;
          localDistanceOverlay = showDistance(
            kakao,
            map,
            localDistanceOverlay,
            content,
            mousePosition
          );
          setDistanceOverlay(localDistanceOverlay);
        });

        // 오른쪽 클릭 이벤트 핸들러
        kakao.maps.event.addListener(map, "rightclick", function () {
          if (!isDrawingEnabled || !drawingFlag) return;

          localMoveLine.setMap(null);
          setMoveLine(null);

          var path = localClickLine.getPath();

          if (path.length > 1) {
            if (localDots[localDots.length - 1].distance) {
              localDots[localDots.length - 1].distance.setMap(null);
              localDots[localDots.length - 1].distance = null;
            }

            const distance = Math.round(localClickLine.getLength());
            setTotalDistance(distance);

            const walkTimeInMinutes = getTimeInMinutes(distance);
            setWalkTime(walkTimeInMinutes);

            const content = `
              <ul class="dotOverlay distanceInfo">
                <li><span class="label">총거리</span><span class="number">${distance}</span>m</li>
                <li><span class="label">도보</span>${Math.floor(walkTimeInMinutes / 60)}시간 ${walkTimeInMinutes % 60}분</li>
              </ul>
            `;
            localDistanceOverlay = showDistance(
              kakao,
              map,
              localDistanceOverlay,
              content,
              path[path.length - 1]
            );
            setDistanceOverlay(localDistanceOverlay);
          } else {
            deleteClickLine(localClickLine);
            localDots = deleteCircleDot(localDots);
            setDots(localDots);
            localDistanceOverlay = deleteDistance(localDistanceOverlay);
            setDistanceOverlay(localDistanceOverlay);
          }
          drawingFlag = false;
        });

        // 경로 저장 버튼 클릭 이벤트 핸들러
        document
          .getElementById("savePath")
          .addEventListener("click", function () {
            if (localClickLine) {
              const path = localClickLine.getPath().map((latlng) => ({
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
  }, [isDrawingEnabled]);

  // 카테고리 버튼 클릭 핸들러
  const handleCategoryClick = (category) => {
    setCurrCategory(category);
    console.log(`${category} 카테고리 클릭됨`);

    if (map && window.kakao && window.kakao.maps.services) {
      searchPlaces(category);
    }
  };

  const searchPlaces = (category) => {
    const { kakao } = window;
    const ps = new kakao.maps.services.Places(map);

    // 기존 마커 제거
    removeMarker();

    // 카테고리 검색
    ps.categorySearch(category, placesSearchCB, { useMapBounds: true });
  };

  const placesSearchCB = (data, status) => {
    const { kakao } = window;
    if (status === kakao.maps.services.Status.OK) {
      displayPlaces(data);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      console.log("검색 결과가 없습니다.");
    } else if (status === kakao.maps.services.Status.ERROR) {
      console.log("검색 중 오류가 발생했습니다.");
    }
  };

  const displayPlaces = (places) => {
    const { kakao } = window;
    let newMarkers = [];

    for (let i = 0; i < places.length; i++) {
      let marker = addMarker(new kakao.maps.LatLng(places[i].y, places[i].x));
      newMarkers.push(marker);

      (function (marker, place) {
        kakao.maps.event.addListener(marker, "click", function () {
          displayPlaceInfo(place);
        });
      })(marker, places[i]);
    }

    setMarkers(newMarkers);
  };

  const addMarker = (position) => {
    const { kakao } = window;
    const marker = new kakao.maps.Marker({
      position: position,
    });

    marker.setMap(map);
    return marker;
  };

  const removeMarker = () => {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    setMarkers([]);
  };

  const displayPlaceInfo = (place) => {
    const { kakao } = window;
    const placeOverlay = new kakao.maps.CustomOverlay({ zIndex: 1 });
    const contentNode = document.createElement("div");
    contentNode.className = "placeinfo_wrap";

    var content = '<div class="placeinfo">' +
                  '   <a class="title" href="' + place.place_url + '" target="_blank" title="' + place.place_name + '">' + place.place_name + '</a>';   

    if (place.road_address_name) {
        content += '    <span title="' + place.road_address_name + '">' + place.road_address_name + '</span>' +
                    '  <span class="jibun" title="' + place.address_name + '">(지번 : ' + place.address_name + ')</span>';
    }  else {
        content += '    <span title="' + place.address_name + '">' + place.address_name + '</span>';
    }                
   
    content += '    <span class="tel">' + place.phone + '</span>' + 
                '</div>' + 
                '<div class="after"></div>';

    contentNode.innerHTML = content;
    placeOverlay.setContent(contentNode);
    placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
    placeOverlay.setMap(map);
  };

  // 산책로 등록 버튼 클릭 핸들러
  const handleRegisterPathClick = () => {
    setIsDrawingEnabled((prev) => !prev);
    console.log("산책로 등록 버튼 클릭됨");
    if (isDrawingEnabled) {
      // 경로 그리기 종료 후 경로를 저장하는 로직 추가
      if (clickLine) {
        const path = clickLine.getPath().map((latlng) => ({
          lat: latlng.getLat(),
          lng: latlng.getLng(),
        }));

        console.log("path:", path);
        console.log("totalDistance:", totalDistance);
        console.log("walkTime:", walkTime);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/paths/save_path", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText);
          }
        };
        xhr.send(JSON.stringify({ path: JSON.stringify(path), totalDistance, walkTime }));
      } else {
        alert("No path to save!");
      }
    }
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
        <div className="category-container" id="category">
          <button
            id="restroom"
            className="category-btn"
            data-order="0"
            onClick={() => handleCategoryClick("PM9")}
          >
            <img src={restroomIcon} alt="화장실" />
            화장실
          </button>
          <button
            id="shelter"
            className="category-btn"
            data-order="1"
            onClick={() => handleCategoryClick("CS2")}
          >
            <img src={shelterIcon} alt="쉼터" />
            쉼터
          </button>
          <button
            id="bicycle"
            className="category-btn"
            data-order="2"
            onClick={() => handleCategoryClick("PM9")}
          >
            <img src={bicycleIcon} alt="자전거" />
            자전거
          </button>
          <button
            id="walkingpath"
            className="category-btn"
            data-order="3"
            onClick={() => handleCategoryClick("PM9")}
          >
            <img src={walkingpathIcon} alt="산책로" />
            산책로
          </button>
          <button
            id="wishlist"
            className="category-btn"
            data-order="4"
            onClick={() => handleCategoryClick("PM9")}
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
