import React from "react";
import styled from "styled-components";

import "../../styles/carousel.css";

const Carousel = props => {
  return (
    <section class="carousel" aria-label="Gallery">
      <ol class="carousel__viewport">
        {(function() {
          var products = [];
          switch (props.type) {
            case "millets":
              products = millets;
              break;
            case "shakes":
              products = shakes;
              break;
          }

          var list = [];
          for (var i = 0; i < products.length; i++) {
            var href = "#carousel__slide" + (i + 1);
            list.push(
              <li id="carousel__slide1" tabindex="0" class="carousel__slide">
                <Image src={millets[i]} alt="Foxtail" />;
                <div class="carousel__snapper" />
              </li>
            );
          }
          return list;
        })()}
      </ol>
      <aside class="carousel__navigation">
        <ol class="carousel__navigation-list">
          {(function() {
            var products = [];
            switch (props.type) {
              case "millets":
              products = millets;
              break;
            case "shakes":
              products = shakes;
              break;
            }

            var list = [];
                for (var i = 0; i < products.length; i++) {
                  var href = "#carousel__slide" + (i + 1);
                  list.push(
                    <li class="carousel__navigation-item">
                      <a href={href} class="carousel__navigation-button" />
                    </li>
                  );
                }
                return list;
          })()}
        </ol>
      </aside>
    </section>
  );
};

export default Carousel;

const millets = [
  "https://i.imgur.com/iA71mhT.png",
  "https://i.imgur.com/5ZX6Ae3.png",
  "https://i.imgur.com/OPRfLW7.png",
  "https://i.imgur.com/BeWWn3S.png"
];

const shakes = ["https://i.imgur.com/2DrXYhk.png"];

const Image = styled.img`
  height: 25em;
  z-index: 9;
`;
