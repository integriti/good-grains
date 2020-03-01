import React from "react";
import styled from "styled-components";

import TopBanner from "./TopBanner";
import HomePicker from "./HomePicker";

const Home = props => {
  return (
    <>
      <HomeContainer>
        <TopBanner />
        <HomePicker type="millets" orientation="right" />
        <HomePicker type="millets" orientation="left" />
        <HomePicker type="millets" orientation="right" />
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  background-image: url("https://i.imgur.com/JE1Jf2v.jpg");
`;
