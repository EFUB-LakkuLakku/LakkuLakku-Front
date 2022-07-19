import React from "react";
import Background from "../common/Background";
import Wrapper from "../common/Wrapper";
import styled from "styled-components";
import DateBar from "./DateBar";
import SideBar from "../SideBar/SideBar";
import Calendar from "./Calendar";

const Box = styled.div`
  flex: 0.75;
  display: flex;
  flex-direction: column;
`;

function MonthlyPage() {
  return (
    <Box>
      <Calendar/>    
    </Box>
  );
}

export default MonthlyPage;
