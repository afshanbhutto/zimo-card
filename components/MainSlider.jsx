import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mainSliderData } from "./mainSliderData";
import Slider from "react-slick";
import CardButton from "./CardButton";



const MainSlider = () => {


  // FOR ARROWS MOVEMENT
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className="container flex flex-col">
      <div className="upperDiv flex justify-between items-center mx-auto mb-2 w-full uppercase  px-2 md:px-1">
        <div className="flex-1 text-left text-2xl tracking-[2px]  md:text-3xl">
          Featured
        </div>
        <div className="flex-1 text-center text-2xl lg:text-3xl tracking-[2px] hidden md:block">
          View all Homes
        </div>
        <div className="flex-1  text-right  text-black text-5xl lg:text-6xl">
          <span className="mr-4" onClick={goToPrevSlide}>&lt;</span>
          <span onClick={goToNextSlide}>&gt;</span>
        </div>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {mainSliderData.map(item => item.card)}
      </Slider>

    </div>
  );
};

export default MainSlider;
