import React from "react";
import styled from "styled-components";
import styleValiable from "../../lib/styleValiable";

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 0 6px 6px rgba(0, 0, 0, 0.1);

  p,
  span {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 2px;
    color: #333;
  }

  .skyblue {
    color: ${styleValiable.blueColor};
  }

  .blue {
    color: ${styleValiable.skyblueColor};
  }
`;

const Header: React.FC = () => {
  return (
    <>
      <Wrapper>
        <p>
          <span className="skyblue">P</span>opulation{" "}
          <span className="blue">T</span>ransition
        </p>
      </Wrapper>
    </>
  );
};

export default Header;
