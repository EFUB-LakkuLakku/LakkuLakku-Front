import React from "react";
import styled from "styled-components";
import FriendList from "./FriendList";
import Search from "./Search";

const Box = styled.div`
  flex: 0.75;
  display: flex;
  flex-direction: column;
`;

function SocialPage() {
  return (
    <Box>
      <FriendList/>
      <Search/>    
    </Box>
  );
}

export default SocialPage;
