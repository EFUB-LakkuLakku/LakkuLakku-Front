import React from "react";

import { useSelector, connect } from "react-redux";
import { plusComment, minusComment } from "../../modules/diary";
import Chat from "./Chat";
const ChatContainer = ({ cntComment }) => {
  return <Chat cntComment={cntComment} />;
};

//컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect 함수를 사용해야함.
export default connect(
  (state) => ({
    cntComment: state.diary.cntComment,
  }),
  {
    plusComment,
    minusComment,
  }
)(ChatContainer);
/*
connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
여기서 mapStateToProps는 리덕스 스토어 안의 상태를 
컴포넌트의 props로 넘겨주기 위해 설정하는 함수이고, 
mapDispatchToProps는 액션 생성 함수를 
컴포넌트의 props로 넘겨주기 위해 사용하는 함수
*/
