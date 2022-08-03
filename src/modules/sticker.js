import { createRef } from "react";

//1.액션 타입 정의
const ADDSTICKER = "sticker/ADD";
const DELETESTICKER = "sticker/DELETE";
const CHANGESTICKER = "sticker/CHANGE"; // 확대 및 축소 , 크기변경

//2.액션 생성 함수
export const addStickerToPanel = (new_sticker) => ({
  type: ADDSTICKER,
  new_sticker,
});

//remove_idx : 삭제할 스티커의 id값
export const deleteStickerOnPanel = (remove_idx) => ({
  type: DELETESTICKER,
  remove_idx,
});

//idx: 변경할 스티커의 id값, newAttrs: 새로운 속성값
export const changeSticker = (idx, newAttrs) => ({
  type: CHANGESTICKER,
  idx,
  newAttrs,
});

//초기상태 -> 특정사용자의 다이어리 요소들 조회하는 api 요청 보내기
const initialState = [];

//3.리듀서 함수
function sticker(state = initialState, action) {
  switch (action.type) {
    case ADDSTICKER:
      const { id, x, y, url } = action.new_sticker;
      const default_width = 100;
      const default_height = 100;
      const random_id = String(id) + String(Math.random() * 100);
      return [
        ...state,
        {
          id: random_id, // 스티커 추가 될 때 마다 id값을 다르게 줘야 다른 스티커라고 인식 가능
          x,
          y,
          url,
          rotation: 0, //0도부터 시작
          width: default_width,
          height: default_height,
        },
      ];

    case DELETESTICKER:
      const newStickers = [...state];
      newStickers.splice(action.remove_idx, 1); // 해당 스티커 제거
      return newStickers;

    case CHANGESTICKER:
      const aferStickers = state.slice(); //배열 복제
      aferStickers[action.idx] = action.newAttrs; // 특정 스티커의 속성값 변경
      return aferStickers;

    default:
      return state;
  }
}

export default sticker;
