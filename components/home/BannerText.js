import React from "react";
import styled from "styled-components";

const BannerText = () => {
  return (
    <WhiteBox>
      <div>
        <h1>Dieter's Choice™</h1>
        <br />
        <h2>Losing weight begins with good nutrition</h2>
      </div>
    </WhiteBox>
  );
};

export default BannerText;

const WhiteBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;

  font-size: 24px;
  max-width: 100rem;

  @media (max-width: 768px) {
    font-size: 2.5vw;
    width: 70%;
  }

  @media (min-width: 1200px) {
    
  }
`;
