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
  margin: auto;
  max-width: 120rem;
`;

const Image = styled.img`
  margin: auto 0;
  max-width: 120rem;
  width: 100%;
  height: 70rem;
  object-fit: cover;
  object-position: 0 0;
`;