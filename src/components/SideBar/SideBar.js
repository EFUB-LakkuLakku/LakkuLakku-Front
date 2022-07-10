import React from "react";
import styled from "styled-components";
import Notice from "./Notice";
import Profile from "./Profile";

const Container = styled.div`
  flex: 0.25;
  display: flex;
  flex-direction: column;
  background-color: red;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;
function SideBar() {
  return (
    <Container>
      <Profile />
      <Notice />
    </Container>
  );
}

export default SideBar;
