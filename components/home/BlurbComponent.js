import React from "react";
import styled from "styled-components";

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
`;

const Image = styled.img`
  position: relative;
  float: right;
  margin: auto 0;
  height: 350px;
  z-index: 9;
`;