import React from "react";
import styled from "styled-components";
import styleValiable from "../../lib/styleValiable";
import HighCharts from "highcharts";
import HighChartsReact from "highcharts-react-official";

const Wrapper = styled.div``;

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

// const Loding = styled.div``;

interface Props {
  compositions: any[] | null;
}

const Graph: React.FC<Props> = props => {
  const { compositions } = props;

  console.log(compositions);

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
        <HighChartsReact highcharts={HighCharts} options={options} />
      </Wrapper>
    </>
  );
};

export default Graph;
