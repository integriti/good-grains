import React from "react";
import styled from "styled-components";

import TopBanner from "./TopBanner";

const Home = props => {
  return (
    <>
      <Container>
        <TopBanner />
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  margin-left: 100;
`;
