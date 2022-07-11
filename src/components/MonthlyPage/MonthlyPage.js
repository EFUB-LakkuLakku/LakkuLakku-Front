import React from "react";
import Background from "../common/Background";
import Wrapper from "../common/Wrapper";
import styled from "styled-components";
import DateBar from "./DateBar";

const Box = styled.div`
  flex: 0.75;
  display: flex;
  flex-direction: column;
`;

function MonthlyPage() {
  return (
    <Box>
      <DateBar />
      {/*<Calendar/> 달력 */}
      MonthlyPage
    </Box>
  );
}

export default MonthlyPage;
