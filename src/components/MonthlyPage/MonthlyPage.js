import React from "react";
import styled from "styled-components";
import Calendar from "./Calendar";

const Box = styled.div`
  flex: 0.75;
  display: flex;
  flex-direction: column;
`;

function MonthlyPage() {
  return (
    <Box>
      <Calendar />
    </Box>
  );
}

export default MonthlyPage;
