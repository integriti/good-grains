import React from "react";
import styled from "styled-components";

const FloatingBox = props => {
  return (
    <>
      <FloatingContainer>
        {(function() {
          switch (props.text) {
            case "FloatingBoxOne":
              return (
                <WhiteBoxOne
                  dangerouslySetInnerHTML={{ __html: FloatingBoxOne }}
                />
              );
              break;
            case "FloatingBoxTwo":
              return (
                <WhiteBoxTwo
                  dangerouslySetInnerHTML={{ __html: FloatingBoxTwo }}
                />
              );
              break;
            case "FloatingBoxThree":
              return (
                <WhiteBoxThree
                  dangerouslySetInnerHTML={{ __html: FloatingBoxThree }}
                />
              );
              break;
            case "FloatingBoxFour":
              return (
                <WhiteBoxFour
                  dangerouslySetInnerHTML={{ __html: FloatingBoxFour }}
                />
              );
              break;
            case "FloatingBoxFive":
              return (
                <WhiteBoxFive
                  dangerouslySetInnerHTML={{ __html: FloatingBoxFive }}
                />
              );
              break;
          }
        })()}
      </FloatingContainer>
    </>
  );
};

export default FloatingBox;

const FloatingBoxOne =
  "<p><h2>Good Grains</h2><p><br /><p>Gluten free rice protein shaked</p><br /><p>Organic gluten free breakfast range</p>";

const FloatingBoxTwo =
  "<p><h2>Pie House</h2><p><br /><p>Great tasting Australian pies in India</p>";

const FloatingBoxThree =
  "<p><h2>No Mites</h2><p><br /><p>A dust mite allergen cleansing herbal spray for allergy sufferers</p>";

const FloatingBoxFour =
  "<p><h2>Trim Foods Australia</h2><p><br /><p>A preservative free heat and eat food range</p>";

const FloatingBoxFive =
  "<p><h2>Brahmi Tea</h2><p><br /><p>A memory enhancing black tea blend</p>";

const FloatingContainer = styled.div``;

const WhiteBoxOne = styled.div`
  position: absolute;
  top: 60px;
  left: 5%;

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

  font-size: 22px;
  max-width: 60%;

  @media (max-width: 768px) {
    position: absolute;
    top: 20px;
    left: 5%;
    padding: 1em;
    font-size: 3.5vw;
    width: 40%;
  }
`;

const WhiteBoxTwo = styled.div`
  position: absolute;
  top: 100px;
  right: 5%;

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

  font-size: 22px;
  max-width: 30%;

  @media (max-width: 768px) {
    position: absolute;
    top: 40px;
    right: 5%;
    padding: 1em;
    font-size: 3.5vw;
    width: 40%;
  }
`;

const WhiteBoxThree = styled.div`
  position: absolute;
  top: 310px;
  left: 80px;

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

  font-size: 22px;
  max-width: 40%;

  @media (max-width: 768px) {
    position: absolute;
    top: 170px;
    left: 12%;
    padding: 1em;
    font-size: 3.5vw;
    width: 40%;
  }
`;

const WhiteBoxFour = styled.div`
  position: absolute;
  top: 390px;
  right: 10%;

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

  font-size: 22px;
  max-width: 30%;

  @media (max-width: 768px) {
    position: absolute;
    top: 190px;
    right: 10%;
    padding: 1em;
    font-size: 3.5vw;
    width: 40%;
  }
`;

const WhiteBoxFive = styled.div`
  position: absolute;
  top: 570px;
  left: 10%;

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

  font-size: 22px;
  max-width: 40%;

  @media (max-width: 768px) {
    position: absolute;
    top: 320px;
    left: 7%;
    padding: 1em;
    font-size: 3.5vw;
    width: 40%;
  }
`;

const BoxOne = styled.div``;
