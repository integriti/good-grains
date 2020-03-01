import React from "react";
import styled from "styled-components";

import TopBanner from "./TopBanner";
import MilletsPicker from "./MilletsPicker";

const Home = props => {
  return (
    <>
      <HomeContainer>
        <TopBanner />
        <MilletsPicker />
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  background-image: url("https://i.imgur.com/JE1Jf2v.jpg");
`;
