import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slideshow.css'; 
import slides from './data';

class Slideshow extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
    };

    return (
      <div className="slideshow-container">
        <Slider {...settings}>
          {slides.map(slide => (
            <div className='slideshow__images__div' key={slide.id}>
              <img src={slide.image} alt={`slide${slide.id}`} />
              <div className='slideshow__text'>{slide.text}</div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Slideshow;
