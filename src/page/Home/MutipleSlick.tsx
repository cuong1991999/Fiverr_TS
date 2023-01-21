import React from "react";
import Slider from "react-slick";
// thiet lap button next and prev cho silder
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
type Props = {};

const MutipleSlick = (props: Props) => {
  // thiet lap silder
  const arrMultipleSlick = [
    {
      title: "Build your brand",
      service: "Logo Design",
      img: "./img/MultipleSlick/logo-design-2x.png",
    },
    {
      title: "Customize your site",
      service: "WordPress",
      img: "./img/MultipleSlick/wordpress-2x.png",
    },
    {
      title: "Share your message",
      service: "Voice Over",
      img: "./img/MultipleSlick/voiceover-2x.png",
    },
    {
      title: "Engage your audience",
      service: "Video Explainer",
      img: "./img/MultipleSlick/animated-explainer-2x.png",
    },
    {
      title: "Reach more customers",
      service: "Social Media",
      img: "./img/MultipleSlick/social-2x.png",
    },
    {
      title: "Unclock growth online",
      service: "SEO",
      img: "./img/MultipleSlick/seo-2x.png",
    },
    {
      title: "Color your dreams",
      service: "Illustration",
      img: "./img/MultipleSlick/illustration-2x.png",
    },
    {
      title: "Go gobal",
      service: "Translation",
      img: "./img/MultipleSlick/translation-2x.png",
    },
    {
      title: "Learn your business",
      service: "Data Entry",
      img: "./img/MultipleSlick/data-entry-2x.png",
    },
    {
      title: "Showcase your story",
      service: "Book Covers",
      img: "./img/MultipleSlick/book-covers-2x.png",
    },
  ];
  let widths = 260;
  let numberSlidesToShow = 5;
  if (window.innerWidth < 1100) {
    numberSlidesToShow = 4;
  }
  if (window.innerWidth < 950) {
    numberSlidesToShow = 3;
  }
  if (window.innerWidth < 700) {
    numberSlidesToShow = 2;
  }
  if (window.innerWidth < 500) {
    numberSlidesToShow = 1;
  }

  const settings = {
    className: " variable-width",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnHover: true,
    variableWidth: true,
    autoplaySpeed: 5000,
    autoplay: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 1000,
    slidesToShow: numberSlidesToShow,
    slidesToScroll: numberSlidesToShow,
  };
  return (
    <section className="mutipleslick container">
      <h2 className="mutipleslick-title">Popular professional services</h2>
      <Slider {...settings}>
        {arrMultipleSlick.map((item, index) => {
          return (
            <div
              className="card-slick"
              key={index}
              style={{ width: widths, height: 345 }}
            >
              <img src={item.img} alt="..." />
              <div className="card_title">
                <h4>
                  <small>{item.title}</small>
                  {item.service}
                </h4>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default MutipleSlick;
