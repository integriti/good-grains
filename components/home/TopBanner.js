import React from "react";
import styled from "styled-components";

import BannerText from "./BannerText";

const TopBanner = () => {
  return (
    <>
      <Image src="https://i.imgur.com/eeODzLu.png" alt="Header" />;
      <BannerText />
    </>
  );
};

export default TopBanner;

const Image = styled.img`
  margin: auto 0;
`;