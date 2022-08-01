import { createRef } from "react";

//1.액션 타입 정의
const ADDSTICKER = "sticker/ADD";
const DELETESTICKER = "sticker/DELETE";

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
    x: 500,
    y: 500,
    category: "cute",
    url: "https://pbs.twimg.com/media/E6J1AVpVkAE5JT0?format=png&name=small",
  },
];

//3.리듀서 함수
function sticker(state = initialState, action) {
  switch (action.type) {
    case ADDSTICKER:
      const { id, x, y, url } = action.new_sticker;

      return [
        ...state,
        {
          id,
          x,
          y,
          url,
          resetButtonRef: createRef(),
        },
      ];

    case DELETESTICKER:
      const newStickers = [...state];
      newStickers.splice(action.remove_idx, 1); // 해당 스티커 제거
      return newStickers;

    default:
      return state;
  }
}

export default sticker;
