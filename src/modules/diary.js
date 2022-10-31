//1.액션 타입 정의

const PLUSCOMMENT = "diary/comments/PLUS";
const MINUSCOMMENT = "diary/comments/MINUS";

//2.액션 생성 함수

export const plusComment = () => ({
  type: PLUSCOMMENT,
});

export const minusComment = () => ({
  type: MINUSCOMMENT,
});

//다이어리 정보 저장
const initialState = {
  cntComment: 0,
}; //댓글 초기 개수

//3.리듀서 함수
function diary(state = initialState, action) {
  console.log("리듀서");
  switch (action.type) {
    case PLUSCOMMENT:
      var copy = { ...state };
      copy.cntComment += 1;
      console.log(copy);
      return copy;

    case MINUSCOMMENT:
      var copy = { ...state };
      copy.cntComment -= 1;
      console.log(copy);
      return copy;

    default:
      return state;
  }
}

export default diary;
