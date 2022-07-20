import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  width: 100%;
  height: 75rem;
  display: flex;
  background-color: ${theme.main};
  border-top-right-radius: 30px;
`;

const Text = styled.text`
  font-size: 24rem;
  font-family: "SF Pro";
  font-style: normal;
  font-weight: bold;
  margin: auto 20rem;
`;

function DateBar() {
  let today = new Date();
  let year = today.getFullYear();
  let month =
    today.getMonth() + 1; /*getMonth()는 0~11까지의 값 반환하므로 1더함*/

  return (
    <Container>
      <Text>
        {year}년 {month}월
      </Text>
    </Container>
  );
}

export default DateBar;
