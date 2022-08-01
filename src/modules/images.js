import { createRef } from "react";

//1.액션 타입 정의
const ADDIMAGE = "images/ADD";
const DELETEIMAGE = "images/DELETE";

//2.액션 생성 함수

export const addStickerToPanel = ({ new_image }) => ({
  type: ADDIMAGE,
  new_image,
});

//remove_idx : 삭제할 이미지의 id값
export const deleteStickerOnPanel = ({ remove_idx }) => ({
  type: DELETEIMAGE,
  remove_idx,
});

//초기상태 -> 특정사용자의 다이어리 요소들 조회하는 api 요청 보내기
const initialState = [
  {
    id: "fox1",
    x: 100,
    y: 100,
    category: "cute",
    url: "https://pbs.twimg.com/media/E6J1AVpVkAE5JT0?format=png&name=small",
  },
  {
    id: "fox2",
    x: 28,
    y: 176,
    category: "cute",
    url: "https://pbs.twimg.com/media/E6J1AVpVkAE5JT0?format=png&name=small",
  },
];

//3.리듀서 함수
function image(state = initialState, action) {
  return state;
}

export default image;
