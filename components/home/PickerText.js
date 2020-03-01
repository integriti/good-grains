import React from "react";
import styled from "styled-components";

const PickerText = props => {
  var blurb;
  switch (props.type) {
    case "millets":
      blurb = millets;
      break;
    case "shakes":
      blurb = shakes;
      break;
    case "bites":
      blurb = bites;
      break;
  }

  var render = [];
  switch (props.orientation) {
    case "right":
      render.push(
        <BlurbLeft>
          <Image src="https://i.imgur.com/0AvttTd.png" />
          <h1>{blurb}</h1>
        </BlurbLeft>
      );
      break;
    case "left":
      render.push(
        <BlurbRight>
          <Image src="https://i.imgur.com/D6Ubbrd.png" />
          <h1>{blurb}</h1>
        </BlurbRight>
      );
      break;
  }

  return render;
};

export default PickerText;

const millets = "The perfect rice replacement";
const shakes = "Shake off the extra kilos!";
const bites = "Flaky bites";

const BlurbLeft = styled.div`
  position: relative;
  display: block;
  width: 30%;
  text-align: center;
  float: left;

  @media (max-width: 768px) {
    width: 50%;
    font-size: 6pt;
  }
`;

const BlurbRight = styled.div`
  position: relative;
  display: block;
  padding-right: 2em;
  width: 30%;
  text-align: center;
  float: right;

  @media (max-width: 768px) {
    font-size: 6pt;
  }
`;

const Image = styled.img`
  margin-top: 80px;
  height: 80px;
`;
