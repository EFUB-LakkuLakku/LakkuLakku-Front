import React from "react";
import styled from "styled-components";
import DiaryHeader from "./DiaryHeader";

//flex 설정 덮어씌우기 -> 더 좋은 방법이 있다면 추후에 수정하기
const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 30px;
`;

function DiaryPage() {
  return (
    <View>
      <DiaryHeader />
    </View>
  );
}

export default DiaryPage;
