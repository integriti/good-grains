import React from "react";
import styled from "styled-components";

import BlurbComponent from "./BlurbComponent";
import Carousel from "./Carousel";

const MilletsPicker = () => {
  return (
    <>
      <Container>
        <Gradient />
        <WideDisplay>
          <Image src="https://i.imgur.com/iA71mhT.png" alt="Foxtail" />;
          <Image src="https://i.imgur.com/5ZX6Ae3.png" alt="Kodo" />;
          <Image src="https://i.imgur.com/iA71mhT.png" alt="Foxtail" />;
        </WideDisplay>
        <NarrowDisplay>
          <RightCarousel>
            <Carousel />
          </RightCarousel>
        </NarrowDisplay>
      </Container>
    </>
  );
};

export default MilletsPicker;

const Container = styled.div`
  position: relative;
  text-align: center;
  height: 30em;
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

const RightCarousel = styled.div`
  position: absolute;
  float: right;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0%, -50%);

  width: 50%;
`;

const Image = styled.img`
  position: relative;
  float: right;
  margin: auto 0;
  max-height: 30em;
  z-index: 9;
`;
