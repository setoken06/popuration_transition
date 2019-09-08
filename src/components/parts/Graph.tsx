import React from "react";
import styled from "styled-components";
import styleValiable from "../../lib/styleValiable";
import HighCharts from "highcharts";
import HighChartsReact from "highcharts-react-official";

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

const Substitute = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
`;

interface Props {
  compositions: any[] | null;
}

const Graph: React.FC<Props> = props => {
  const { compositions } = props;

  const options: Highcharts.Options = {
    title: {
      text: "人口推移"
    },
    plotOptions: {
      series: {
        pointInterval: 5,
        pointStart: 1965
      }
    },
    series: compositions || undefined
  };

  return (
    <>
      <Wrapper>
        <Title>
          <p>人口推移</p>
        </Title>
        {compositions ? (
          <HighChartsReact highcharts={HighCharts} options={options} />
        ) : (
          <Substitute>都道府県を選択してください</Substitute>
        )}
      </Wrapper>
    </>
  );
};

export default Graph;
