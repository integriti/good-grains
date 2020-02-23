import React from "react";
import styled from "styled-components";

const BannerText = () => {
  return (
    <WhiteBox>
      <div>
        <h1>Dieter's Choice™</h1>
        <h2>Losing weight begins with good nutrition</h2>
      </div>
    </WhiteBox>
  );
};

export default BannerText;

const WhiteBox = styled.div`
  width: 500px;
  height: 100px;
  margin: auto;

  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
`;
