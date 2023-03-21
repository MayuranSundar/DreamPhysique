import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slideshow.css'; 
import slide1 from '../../../images/slide1.png'
import slide2 from '../../../images/slide2.png'
import slide3 from '../../../images/slide3.png'

class Slideshow extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    };

    return (
      <div className="slideshow-container">
        <Slider {...settings}>
          <div className='slideshow__images__div'>
            <img src={slide1} alt="slide1" />
          </div>
          <div className='slideshow__images__div'>
            <img src={slide2} alt="slide2" />
          </div>
          <div className='slideshow__images__div'>
            <img src={slide3} alt="slide3" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slideshow;
