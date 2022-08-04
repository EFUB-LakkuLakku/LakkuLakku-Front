//1.액션 타입 정의
const ADDPAPER = "paper/ADD";

//2.액션 생성 함수

export const addPaperToPanel = (new_paper) => ({
  type: ADDPAPER,
  new_paper,
});


//초기상태 -> 특정사용자의 다이어리 요소들 조회하는 api 요청 보내기
const initialState = [];

//3.리듀서 함수
function paper(state = initialState, action) {
  switch (action.type) {
    case ADDPAPER:
      const { id, x, y, url } = action.new_paper;

      return [
        ...state,
        {
          id,
          x,
          y,
          url,
        },
      ];


    default:
      return state;
  }
}

export default paper;
