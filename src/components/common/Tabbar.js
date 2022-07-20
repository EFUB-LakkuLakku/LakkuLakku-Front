import styled from "styled-components";
import { Link } from "react-router-dom";
const Tab = styled(Link)`
  width: 153rem;
  height: 37rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px var(--border); // 적용이 안된다.
  text-decoration: none;
  color: #27241d;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  background-color: ${({ focus }) => (focus ? "var(--main)" : "var(--sub-3)")};
  &:hover {
    background-color: var(--main);
  }
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: -37rem;
  margin-right: 30rem;
`;

const TabName = styled.text`
  font-family: "NotoSansKR-Regular";
  font-style: normal;
  font-weight: 600;
  font-size: 18rem;
  line-height: 27rem;

  /* identical to box height, or 150% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  font-feature-settings: "calt" off;
`;

const Tabbar = ({ currentTab, setCurrentTab }) => {
  return (
    <TabContainer>
      <Tab
        to={"/main"}
        focus={currentTab == 0 ? true : false}
        onClick={() => setCurrentTab(0)}
      >
        <TabName>다이어리</TabName>
      </Tab>
      <Tab
        to={"/main/social"}
        focus={currentTab == 1 ? true : false}
        onClick={() => setCurrentTab(1)}
      >
        <TabName>친구</TabName>
      </Tab>
    </TabContainer>
  );
};

export default Tabbar;
