import React from "react";
import styled from "styled-components";

import BannerText from "./BannerText";

const TopBanner = () => {
  return (
    <>
      <Container>
        <Image src="https://i.imgur.com/eeODzLu.png" alt="Header" />;
        <BannerText />
      </Container>
    </>
  );
};

export default TopBanner;

const Container = styled.div`
  position: relative;
  text-align: center;
`;

const Image = styled.img`
  margin: auto 0;
`;