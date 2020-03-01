import React from "react";
import styled from "styled-components";

const MilletsPicker = () => {
  return (
    <>
      <Container>
        <Gradient>
        <BlurbComponent>
          <Image src="https://i.imgur.com/0AvttTd.png" alt="Arrow" />;
          <h1>The perfect rice replacement</h1>
        </BlurbComponent>
        </Gradient>
        <WideDisplay>
          <Image src="https://i.imgur.com/iA71mhT.png" alt="Foxtail" />;
          <Image src="https://i.imgur.com/5ZX6Ae3.png" alt="Kodo" />;
        </WideDisplay>
        <NarrowDisplay>
          <Image src="https://i.imgur.com/iA71mhT.png" alt="Foxtail" />;
          <Image src="https://i.imgur.com/5ZX6Ae3.png" alt="Kodo" />;
        </NarrowDisplay>
      </Container>
    </>
  );
};

export default MilletsPicker;

const Container = styled.div`
  position: relative;
  text-align: center;
  height: 400px;
  max-width: 120rem;
  margin: auto;
`;

const Gradient = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(83, 83, 83, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0%, -50%);
  width: 100%;
  height: 50%;
`;

const BlurbComponent = styled.div`
  position: relative;
  float: left;
`;

const WideDisplay = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NarrowDisplay = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const Image = styled.img`
  position: relative;
  float: right;
  margin: auto 0;
  height: 350px;
  z-index: 9;
`;
