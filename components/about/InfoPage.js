import React from "react";
import styled from "styled-components";

const InfoPage = props => {
  const setBg = () => {
    return styled.div`
      background-image: url(${props.bg ? props.bg : null});
      background-size: cover;
      width: ${props.columns == "two" ? "50%" : "100%"};
    `;
  };

  console.log(props.bg);

  const BackgroundContainer = setBg(props);

  return (
    <>
      <BackgroundContainer>
        {(function() {
          console.log(props.text);
          console.log(AboutTextOne);
          switch (props.text) {
            case "AboutTextOne":
              return (
                <WhiteText dangerouslySetInnerHTML={{ __html: AboutTextOne }} />
              );
              break;
            case "AboutTextTwo":
              return (
                <WhiteBox dangerouslySetInnerHTML={{ __html: AboutTextTwo }} />
              );
              break;
          }
        })()}
      </BackgroundContainer>
    </>
  );
};

export default InfoPage;

const AboutTextOne =
  "<p><h2>Dieters Choice</h2></p><br /><p>We offer a proven range of effective weight loss products with minimum or no use of white rice</p><br /><p>They are healthy, tasty, low carb, low GI and high fibre</p>";

const AboutTextTwo =
  "<p>that there is growing awareness of the need to eat healthy food, exercise regularly and maintain a work-life balance</p><br /><p>Unfortunately statistics indicate that the opposite is true with poor diets leading to rising obesity levels and unhealthy lifestyles due to poor productivity and millions ofl ives lost to non communicable diseases</p>";

const WhiteText = styled.div`
  margin-top: 100px;
  padding: 30px;
  padding-bottom: 100px;
  font-size: 24px;
  color: white;

  @media (max-width: 768px) {
    padding: 1em;
    padding-bottom: 100px;
    font-size: 3.5vw;
  }
`;

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
