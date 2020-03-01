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
  }

  return (
    <BlurbContainer>
      <h1>{blurb}</h1>
    </BlurbContainer>
  );
};

export default PickerText;

const millets = "The perfect rice replacement";
const shakes = "Shake off the extra kilos!";
const bites = "Flaky bites";

const BlurbContainer = styled.div`
  position: relative;
`;
