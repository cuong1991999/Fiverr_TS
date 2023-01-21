import React, { useState, memo } from "react";
import Slider from "react-slick";

type Props = {};
// thiet lap cho silder
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
const Testimonial = (props: Props) => {
  //thiet lap video
  const [video, setVideo] = useState("");
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const arrTestimonial = [
    {
      title: "Kay Kim, Co-Founder ",
      logo: "./img/Testimonial/rooted-logo-x2.321d79d.png",

      description:
        "It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working.",
      img: "./img/Testimonial/testimonial1.png",
      video:
        "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw",
    },
    {
      logo: "./img/Testimonial/naadam-logo-x2.0a3b198.png",
      title: "Caitlin Tormey, Chief Commercial Officer",

      description:
        "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day.",
      img: "./img/Testimonial/testimonial2.png",
      video:
        "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/plfa6gdjihpdvr10rchl",
    },
    {
      logo: "./img/Testimonial/lavender-logo-x2.89c5e2e.png",
      title: "Brighid Gannon (DNP, PMHNP-BC), Co-Founder",
      description:
        "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world.",
      img: "./img/Testimonial/testimonial3.png",
      video:
        "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi",
    },
    {
      title: "Tim and Dan Joo, Co-Founders",
      logo: "./img/Testimonial/haerfest-logo-x2.03fa5c5.png",
      description:
        "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does.",
      img: "./img/Testimonial/testimonial4.png",
      video:
        "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/bsncmkwya3nectkensun",
    },
  ];
  const handleReShow2 = () => {
    let reshow = window.document.querySelector(".video2");
    let loads = window.document.querySelector(
      "#videos"
    ) as HTMLVideoElement | null;

    loads?.pause();

    reshow?.classList.toggle("show");
  };
  return (
    <section className="testimonial container">
      <Slider {...settings}>
        {arrTestimonial.map((item, index) => {
          return (
            <div
              className="d-flex align-items-center w-100"
              style={{ overflow: "hidden" }}
              key={index}
            >
              <div
                className="col-12 col-lg-6 testimonial-img"
                onClick={() => {
                  setVideo(item.video);

                  let show = window.document.querySelector(".video2");
                  let loads = window.document.querySelector(
                    "#videos"
                  ) as HTMLVideoElement | null;
                  show?.classList.toggle("show");
                  loads?.play();
                }}
              >
                <img src={item.img} alt="..." className="w-100" />
              </div>
              <div className="col-6 testimonial-content">
                <div className="testimonial-content-top">
                  <h5>{item.title}</h5>
                  <span>
                    <img src={item.logo} alt="..." className="w-0" />
                  </span>
                </div>
                <div className="testimonial-content-bot">
                  <i>{item.description}</i>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="video2">
        <div className="video-overplay2" onClick={handleReShow2}></div>
        <video id="videos" src={video} autoPlay controls></video>
      </div>
    </section>
  );
};

export default memo(Testimonial);
