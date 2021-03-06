import React from "react";
import styled from "styled-components";
import { Prefecture } from "../../lib/hooks/useResas";
import styleValiable from "../../lib/styleValiable";

const Wrapper = styled.div`
  margin-top: 2rem;
`;

const Title = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;

  p {
    letter-spacing: 2px;
    font-weight: bold;
    padding-left: 0.5rem;
    font-size: 1.3rem;
    border-left: 3px solid ${styleValiable.blueColor};
  }
`;

const List = styled.ul`
  width: 95%;
  margin-left: 2rem;
  display: flex;
  flex-wrap: wrap;

  li {
    width: 5rem;
    line-height: 2.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    input {
      display: none;
    }

    input:checked + label {
      background: linear-gradient(
        -45deg,
        ${styleValiable.blueColor},
        ${styleValiable.skyblueColor}
      );
      opacity: 0.6;
      border-radius: 5px;
      box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
      color: #fff;
    }

    label {
      height: 100%;
      width: 100%;
      text-align: center;
      font-size: 1.1rem;
    }
  }
`;

const Loding = styled.div`
  height: 14rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  prefectures: Prefecture[] | null;
  updataCompositions: (id: number, prefName: string) => void;
}

const CheckboxList: React.FC<Props> = props => {
  const { prefectures, updataCompositions } = props;

  return (
    <>
      <Wrapper>
        <Title>
          <p>都道府県一覧</p>
        </Title>
        <List>
          {prefectures ? (
            prefectures.map((item: Prefecture) => (
              <li key={item.prefCode}>
                <input
                  type="checkbox"
                  id={item.prefName}
                  onChange={() =>
                    updataCompositions(item.prefCode, item.prefName)
                  }
                />
                <label htmlFor={item.prefName}>{item.prefName}</label>
              </li>
            ))
          ) : (
            <Loding>読み込み中...</Loding>
          )}
        </List>
      </Wrapper>
    </>
  );
};

export default CheckboxList;
