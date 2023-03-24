import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slideshow.css'; 
import slide1 from '../../../images/1.jpg'
import slide2 from '../../../images/2.jpg'
import slide3 from '../../../images/3.jpg'

class Slideshow extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div className="slideshow-container">
        <Slider {...settings}>
          <div className='slideshow__images__div'>
            <img src={slide1} alt="slide1" />
            <div className='slideshow__text'>Comprehensive weight loss approach with customised diet plans</div>
          </div>
          <div className='slideshow__images__div'>
            <img src={slide2} alt="slide2" />
            <div className='slideshow__text'>Evidence based training informed by the latest research</div>
          </div>
          <div className='slideshow__images__div'>
            <img src={slide3} alt="slide3" />
            <div className='slideshow__text'>Supportive and non judgemental environment for long term success</div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slideshow;
