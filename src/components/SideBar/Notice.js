import React from "react";
import theme from "../../styles/theme";
import styled from "styled-components";

const Container = styled.div`
  flex: 0.365;
  background-color: ${theme.main};
  border-bottom-left-radius: 30px;
`;
function Notice() {
  return <Container>Notice</Container>;
}

export default Notice;
