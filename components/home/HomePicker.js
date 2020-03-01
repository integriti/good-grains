import React from "react";
import styled from "styled-components";

import BlurbComponent from "./BlurbComponent";
import Carousel from "./Carousel";

const HomePicker = props => {
  return (
    <>
      <Container>
        <Gradient />
        <WideDisplay>
          {(function() {
            switch (props.type) {
              case "millets":
                var products = [];
                for (var i = 0; i < millets.length; i++) {
                  products.push(<Image src={millets[i]} />);
                }
                return products;
              case "shakes":
                var products = [];
                for (var i = 0; i < shakes.length; i++) {
                  products.push(<Image src={shakes[i]} />);
                }
                return products;
            }
          })()}
        </WideDisplay>
        <NarrowDisplay>
          {(function() {
            switch (props.orientation) {
              case "left":
                return (
                  <>
                    <LeftCarousel>
                      <Carousel type={props.type} />
                    </LeftCarousel>
                  </>
                );
              case "right":
                return (
                  <>
                    <RightCarousel>
                      <Carousel type={props.type} />
                    </RightCarousel>
                  </>
                );
            }
          })()}
        </NarrowDisplay>
      </Container>
    </>
  );
};

export default HomePicker;

const millets = [
  "https://i.imgur.com/iA71mhT.png",
  "https://i.imgur.com/5ZX6Ae3.png",
  "https://i.imgur.com/OPRfLW7.png",
  "https://i.imgur.com/BeWWn3S.png"
];

const shakes = ["https://i.imgur.com/2DrXYhk.png"];

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
  top: 50%;
  right: 0;
  transform: translate(0%, -50%);
  width: 50%;
`;

const LeftCarousel = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0%, -50%);
  width: 50%;
`;

const Image = styled.img`
  position: relative;
  margin: auto 0;
  max-height: 30em;
  z-index: 9;
`;