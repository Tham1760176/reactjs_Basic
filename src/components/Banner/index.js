import React from 'react';
import { Carousel } from 'antd';

import './style.css';

// const contentStyle = {
//   height: '400px',
//   color: '#fff',
//   background: '#08080815',
// };

const carouselSettings = {
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const Banner = () => {
  return (
    <Carousel autoplay autoPlaySpeed={2000} effect="scrolly" {...carouselSettings}>
      <div className="carouselStyle">
        <h3>
          <img src="./images/banner.avif" alt="" />
        </h3>
      </div>
      <div className="carouselStyle">
        <h3>
          <img src="./images/banner.avif" alt="" />
        </h3>
      </div>
      <div className="carouselStyle">
        <h3>
          <img src="./images/banner.avif" alt="" />
        </h3>
      </div>
      <div className="carouselStyle">
        <h3>
          <img src="./images/banner.avif" alt="" />
        </h3>
      </div>
    </Carousel>
  );
};

export default Banner;
