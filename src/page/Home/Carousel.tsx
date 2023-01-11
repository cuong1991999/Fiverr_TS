import React from "react";
import Slider from "react-slick";

type Props = {};

const Carousel = (props: Props) => {
  const arrBackGroundImg = [
    {
      img: "/img/Carousel/CarouselBackground/CarouselBG-1.png",
    },
    {
      img: "/img/Carousel/CarouselBackground/CarouselBG-2.png",
    },
    {
      img: "/img/Carousel/CarouselBackground/CarouselBG-3.png",
    },
    {
      img: "/img/Carousel/CarouselBackground/CarouselBG-4.png",
    },
    {
      img: "/img/Carousel/CarouselBackground/CarouselBG-5.png",
    },
  ];
  const settings = {
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <section className="carousel">
      <div className="carousel-background">
        <Slider {...settings} className={"carousel-slider"}>
          {arrBackGroundImg.map((item, index) => {
            return (
              <div key={index}>
                <img src={`${item.img}`} alt="" className="slider__img" />
              </div>
            );
          })}
        </Slider>
        <div className="carousel-slider-tablet-mobile"></div>

        <div className="carousel__search">
          <h1 className="carousel__search-title">
            Find the perfect <i>freelance</i>
            <br />
            services for your business
          </h1>
          <form className="input-group">
            <input
              type="text"
              placeholder="Try 'building mobile app'"
              className="form-control form-control-mobile"
            />
            <button className="btn carousel_btn">Search</button>
          </form>
        </div>
      </div>
      <section className="carousel__partner"></section>
    </section>
  );
};

export default Carousel;
