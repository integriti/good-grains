import React from "react";
import styled from "styled-components";

const FloatingBox = props => {
  return (
    <>
      <WhiteBox>
      </WhiteBox>
    </>
  );
};

export default FloatingBox;

const FloatingBoxOne =
  "<p><h2>Good Grains</h2><p><br /><p>Gluten free rice protein shaked</p><br /><p>Organic gluten free breakfast range</p>";

const FloatingBoxTwo =
  "<p><h2>Good Grains</h2><p><br /><p>Gluten free rice protein shaked</p><br /><p>Organic gluten free breakfast range</p>";

const FloatingBoxThree =
  "<p><h2>Good Grains</h2><p><br /><p>Gluten free rice protein shaked</p><br /><p>Organic gluten free breakfast range</p>";

const WhiteBox = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  margin-bottom: 40px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.8);

  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;

  font-size: 28px;
  max-width: 60%;

  @media (max-width: 768px) {
    padding: 1em;
    font-size: 3.5vw;
  }
`;
