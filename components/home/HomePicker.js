import React from "react";
import styled from "styled-components";

import PickerText from "./PickerText";
import Carousel from "./Carousel";

const HomePicker = props => {
  var products = [];
  switch (props.type) {
    case "millets":
      products = millets;
      break;
    case "shakes":
      products = shakes;
      break;
  }

  const setOrientation = () => {
    return styled.div`
      position: relative;
      display: block;
      width: 70%;
      text-align: center;
      float: ${props.orientation === "left" ? "left" : "right"};

      @media (max-width: 768px) {
        display: none;
      }
    `;
  };

  const WideDisplay = setOrientation(this.props);

  return (
    <>
      <Container>
        <Gradient />
        <PickerText type={props.type} orientation={props.orientation} />
        <WideDisplay>
          {(function() {
            var list = [];
            for (var i = 0; i < products.length; i++) {
              list.push(<Image src={products[i]} />);
            }
            return list;
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

  z-index: 0;
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
  height: 20em;
`;
