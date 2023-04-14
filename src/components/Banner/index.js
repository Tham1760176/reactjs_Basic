import React from 'react';
import { Carousel } from 'antd';

import './style.css';

const carouselSettings = {
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Banner = () => {
  return (
    <Carousel autoplay autoPlaySpeed={2000} effect="scrolly" {...carouselSettings}>
      <div className="carouselStyle">
        <h3>
          <img src="./images/sale.webp" alt="" />
        </h3>
      </div>
      <div className="carouselStyle">
        <h3>
          <img src="./images/menbanner.png" alt="" />
        </h3>
      </div>
      <div className="carouselStyle">
        <h3>
          <img src="./images/menbanner2.jpg" alt="" />
        </h3>
      </div>
    </Carousel>
  );
};

export default Banner;
