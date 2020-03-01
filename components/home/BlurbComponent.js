import React from "react";
import styled from "styled-components";

const BlurbComponent = () => {
  return (
    <>
      <Container>
        <Image src="https://i.imgur.com/0AvttTd.png" alt="Arrow" />;
        <h1>The perfect rice replacement</h1>
      </Container>
    </>
  );
};

export default BlurbComponent;

const Container = styled.div`
`;

const Image = styled.img`

`;