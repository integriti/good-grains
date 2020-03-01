import React from "react";
import styled from "styled-components";

import InfoPage from "./InfoPage";
import FloatingBox from "./FloatingBox";

const About = props => {
  return (
    <>
    <AboutContainer>
      <AboutBox>
        <InfoPage columns="two" bg="https://i.imgur.com/XV8012V.jpg" />
        <InfoPage columns="two" layout="WhiteText" text="AboutTextOne" />
      </AboutBox>
      <WhiteBackground>
        <h1>It's an open secret...</h1>
      </WhiteBackground>
      <AboutBox>
        <InfoPage columns="one" bg="https://i.imgur.com/ERutevI.png" layout="WhiteBox" text="AboutTextTwo" />
      </AboutBox>
      <Creations>
        <h1>Our creations to date...</h1>
      </Creations>
      <CreationsContainer>
        <FloatingBox text="FloatingBoxOne" />
        <FloatingBox text="FloatingBoxTwo" />
        <FloatingBox text="FloatingBoxThree" />
        <FloatingBox text="FloatingBoxFour" />
        <FloatingBox text="FloatingBoxFive" />
      </CreationsContainer>
      </AboutContainer>
    </>
  );
};

export default About;

const AboutContainer = styled.div`
  background-image: url("https://i.imgur.com/JE1Jf2v.jpg");
`;

const AboutBox = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  max-width: 120rem;
  text-align: center;
`;

const CreationsContainer = styled.div`
  position: relative;
  margin: auto;
  display: block;
  width: 100%;
  height: 867px;
  background-image: url("https://i.imgur.com/qkWxSlB.jpg");
  background-size: cover;
  max-width: 120rem;
  text-align: center;

  @media (max-width: 768px) {
    height: 490px;
  }
`;

const WhiteBackground = styled.div`
  margin: auto;
  padding-left: 3em;
  max-width: 120rem;
  text-align: left;
  font-size: 14px;
  padding: 0.5em;
  background-color: white;

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 1em;
  }
`;

const Creations = styled.div`
  margin: auto;
  padding-right: 3em;
  max-width: 120rem;
  text-align: right;
  font-size: 14px;
  padding: 0.5em;
  background-color: white;

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 1em;
  }
`;
