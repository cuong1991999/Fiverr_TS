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
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <section className="carousel">
      <div className="carousel-background">
        <Slider {...settings} className={"carousel-slider"}>
          {arrBackGroundImg.map((item, index) => {
            return (
              <div key={index}>
                <img src={`${item.img}`} alt="..." className="slider__img" />
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
          <div className="popular">
            <span>Popular: </span>
            <ul className="popular_list">
              <li className="popular_item">
                <a href="#">Website Design</a>
              </li>
              <li className="popular_item">
                <a href="#">WordPress</a>
              </li>
              <li className="popular_item">
                <a href="#">Logo Design</a>
              </li>
              <li className="popular_item">
                <a href="#">Video Editing</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="carousel__partner container">
        <div className="carousel-trust">
          <span>Trusted by:</span>
        </div>
        <ul className="partner_list">
          <li className="partner_item">
            <img src="./img/Carousel/CarouselPartner/facebook.png" alt="..." />
          </li>
          <li className="partner_item">
            <img src="./img/Carousel/CarouselPartner/google.png" alt="..." />
          </li>
          <li className="partner_item">
            <img src="./img/Carousel/CarouselPartner/netflix.png" alt="..." />
          </li>
          <li className="partner_item">
            <img src="/img/Carousel/CarouselPartner/paypal.png" alt="..." />
          </li>
          <li className="partner_item">
            <img src="/img/Carousel/CarouselPartner/pg.png" alt="..." />
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Carousel;
