import React from "react";
import styled from "styled-components";

import "../../styles/carousel.css";

const Carousel = props => {
  return (
    <section class="carousel" aria-label="Gallery">
      <ol class="carousel__viewport">
        <li id="carousel__slide1" tabindex="0" class="carousel__slide">
          <Image src="https://i.imgur.com/iA71mhT.png" alt="Foxtail" />;
          <div class="carousel__snapper">
            <a href="#carousel__slide4" class="carousel__prev" />
            <a href="#carousel__slide2" class="carousel__next" />
          </div>
        </li>
        <li id="carousel__slide2" tabindex="0" class="carousel__slide">
          <Image src="https://i.imgur.com/5ZX6Ae3.png" alt="Kodo" />;
          <div class="carousel__snapper" />
          <a href="#carousel__slide1" class="carousel__prev" />
          <a href="#carousel__slide3" class="carousel__next" />
        </li>
        <li id="carousel__slide3" tabindex="0" class="carousel__slide">
          <Image src="https://i.imgur.com/OPRfLW7.png" alt="Foxtail" />;
          <div class="carousel__snapper" />
          <a href="#carousel__slide2" class="carousel__prev" />
          <a href="#carousel__slide4" class="carousel__next" />
        </li>
        <li id="carousel__slide4" tabindex="0" class="carousel__slide">
          <Image src="https://i.imgur.com/BeWWn3S.png" alt="Kodo" />;
          <div class="carousel__snapper" />
          <a href="#carousel__slide3" class="carousel__prev" />
          <a href="#carousel__slide1" class="carousel__next" />
        </li>
      </ol>
      <aside class="carousel__navigation">
        <ol class="carousel__navigation-list">
          <li class="carousel__navigation-item">
            <a href="#carousel__slide1" class="carousel__navigation-button" />
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide2" class="carousel__navigation-button" />
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide3" class="carousel__navigation-button" />
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide4" class="carousel__navigation-button" />
          </li>
        </ol>
      </aside>
    </section>
  );
};

export default Carousel;

const Image = styled.img`
  height: 25em;
  z-index: 9;
`;
