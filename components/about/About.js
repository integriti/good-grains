import React from "react";
import styled from "styled-components";

import InfoPage from "./InfoPage";

const About = props => {
  return (
    <>
      <AboutContainer>
        <InfoPage columns="two" bg="https://i.imgur.com/XV8012V.jpg" />
        <InfoPage columns="two" layout="WhiteText" text="AboutTextOne" />
      </AboutContainer>
      <WhiteBackground>
        <h1>It's an open secret...</h1>
      </WhiteBackground>
      <AboutContainer>
        <InfoPage columns="one" bg="https://i.imgur.com/ERutevI.png" layout="WhiteBox" text="AboutTextTwo" />
      </AboutContainer>
      <Creations>
        <h1>Our creations to date...</h1>
      </Creations>
      <AboutContainer>
        <InfoPage columns="one" bg="https://i.imgur.com/qkWxSlB.jpg" layout="WhiteBox" text="AboutTextThree" />
      </AboutContainer>
    </>
  );
};

export default About;

const AboutContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  background-image: url("https://i.imgur.com/JE1Jf2v.jpg");
  max-width: 120rem;
  text-align: center;
`;

const WhiteBackground = styled.div`
  margin: auto;
  padding-left: 3em;
  max-width: 120rem;
  text-align: left;
  font-size: 14px;
`;

const Creations = styled.div`
  margin: auto;
  padding-right: 3em;
  max-width: 120rem;
  text-align: right;
  font-size: 14px;
`;
