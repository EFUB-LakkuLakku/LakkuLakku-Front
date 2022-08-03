import React from "react";
import Setting from "./Setting";
import styled from "styled-components";

const Box = styled.div`
  flex: 0.75;
  display: flex;
  flex-direction: column;
`;
function SettingPage() {
  return (
    <Box>
      <Setting />
    </Box>
  );
}

export default SettingPage;
