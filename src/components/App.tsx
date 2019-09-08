import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { usePrefectures, useComposition } from "../lib/hooks/useResas";
// components
import Header from "./parts/Header";
import Checkboxlist from "./parts/CheckboxList";
import Graph from "./parts/Graph";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
    font-size: 16px;
  }

  li {
    list-style: none;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
`;

const Body = styled.div`
  height: calc(100% - 50px);
  margin: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const App: React.FC = () => {
  const prefectures = usePrefectures();
  const { compositions, updataCompositions } = useComposition();

  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Body>
          <Checkboxlist
            prefectures={prefectures}
            updataCompositions={updataCompositions}
          />
          <Graph compositions={compositions} />
        </Body>
      </Wrapper>
    </>
  );
};

export default App;
