import React from "react";
import styled, { createGlobalStyle } from "styled-components";
// components
import Header from "./parts/Header";
import Checkboxlist from "./parts/CheckboxList";

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
  margin: 2rem 4rem;
`;

const App: React.FC = () => {
  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Body>
          <Checkboxlist />
          <div>graph</div>
        </Body>
      </Wrapper>
    </>
  );
};

export default App;
