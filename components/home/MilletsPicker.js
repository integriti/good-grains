import React from "react";
import styled from "styled-components";

const MilletsPicker = () => {
  return (
    <>
      <Container>
        <Image src="https://i.imgur.com/iA71mhT.png" alt="Foxtail" />;
        <Image src="https://i.imgur.com/5ZX6Ae3.png" alt="Kodo" />;
        <Gradient />
      </Container>
    </>
  );
};

export default MilletsPicker;

const Container = styled.div`
  position: relative;
  text-align: center;
  height: 400px;
`;

const Gradient = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(83, 83, 83, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0%, -50%);
  width: 100%;
  height: 50%;
`;

const Image = styled.img`
  position: relative;
  margin: auto 0;
  height: 400px;
  z-index: 9;
`;
