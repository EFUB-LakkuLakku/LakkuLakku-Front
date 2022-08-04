import { createRef } from "react";

//1.액션 타입 정의
const ADDIMAGE = "images/ADD";
const DELETEIMAGE = "images/DELETE";
const CHANGEIMAGE = "images/CHANGE";

//2.액션 생성 함수

export const addImageToPanel = (new_image) => ({
  type: ADDIMAGE,
  new_image,
});

//remove_idx : 삭제할 이미지의 id값
export const deleteImageOnPanel = (remove_idx) => ({
  type: DELETEIMAGE,
  remove_idx,
});

//idx: 변경할 Image의 id값, newAttrs: 새로운 속성값
export const changeImage = (idx, newAttrs) => ({
  type: CHANGEIMAGE,
  idx,
  newAttrs,
});

//초기상태 -> 특정사용자의 다이어리 요소들 조회하는 api 요청 보내기
const initialState = [
  /*
  {
    id: "fox1",
    x: 100,
    y: 100,
    width:200,
    height:100,
    category: "cute",
    url: "https://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/039/143/original/IMG_5649%E3%81%AE%E3%82%B3%E3%83%92%E3%82%9A%E3%83%BC.jpg?2019&d=750x400",
  },
  {
    id: "fox2",
    x: 28,
    y: 176,
    width:200,
    height:100,
    category: "cute",
    url: "https://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/039/143/original/IMG_5649%E3%81%AE%E3%82%B3%E3%83%92%E3%82%9A%E3%83%BC.jpg?2019&d=750x400",
  },
  */
];

//3.리듀서 함수
function image(state = initialState, action) {
  switch (action.type) {
    case ADDIMAGE:
      const { id, x, y, url } = action.new_image;
      const default_width = 300;
      const default_height = 300;
      const random_id = id + Math.random() * 9999;
      return [
        ...state,

        {
          id: random_id, // 스티커 추가 될 때 마다 id값을 다르게 줘야 다른 스티커라고 인식 가능
          x,
          y,
          width: default_width,
          height: default_height,
          rotation: 0, //0도부터 시작
          url,
        },
      ];

    case DELETEIMAGE:
      const newImages = [...state];
      newImages.splice(action.remove_idx, 1); // 해당 이미지 제거
      return newImages;

    case CHANGEIMAGE:
      const aferImages = state.slice(); //배열 복제
      aferImages[action.idx] = action.newAttrs; // 특정 스티커의 속성값 변경
      return aferImages;

    default:
      return state;
  }
}

export default image;
