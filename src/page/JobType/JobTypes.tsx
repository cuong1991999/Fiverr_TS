import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Slider from "react-slick";
import CategoriesMenuNoSticky from "../../components/Category/CategoriesMenuNoSticky";
import Footer from "../../components/Footer/Footer";
import HeaderNoSticky from "../../components/Header/HearderNoSticky";
import { DispatchType, RootState } from "../../redux/configStore";
import { getJobTypeApi } from "../../redux/reducer/JobManagementReducer";
// lam button next and prev cho jobtype-popular
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
//
type Props = {};

const JobTypes = (props: Props) => {
  const params: any = useParams();
  const dispatch: DispatchType = useDispatch();
  const id = params.id;
  // call api

  useEffect(() => {
    dispatch(getJobTypeApi(id));
  }, [id]);

  const { JobType } = useSelector(
    (state: RootState) => state.JobManagementReducer
  );

  // thay doi banner
  let imgBanner = "/img/JobType/graphics-design-desktop.webp";
  if (window.innerWidth < 600) {
    imgBanner = "/img/JobType/graphics-design-mobile.webp";
  }
  //

  // silder
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
  };
  //

  // drop down cho mobile
  const handleDropdown = () => {
    let show = window.document.querySelector(".related-job");
    show?.classList.toggle("showdrop");
  };
  return (
    <section className="jobtype">
      <HeaderNoSticky />
      <CategoriesMenuNoSticky />
      <section className="jobtype-wrapper ">
        <section className=" jobtype-banner container ">
          <div
            className="banner"
            style={{
              backgroundImage: `url(${imgBanner})`,
            }}
          >
            <div className="banner-content">
              <h1>{JobType[0]?.tenLoaiCongViec}</h1>
              <button className="btn">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentFill"
                  >
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM5.742 11.778 11.655 8.3a.348.348 0 0 0 0-.6L5.742 4.222a.348.348 0 0 0-.525.3v6.956a.348.348 0 0 0 .525.3Z"
                    ></path>
                  </svg>
                </span>
                How Fiverr Works
              </button>
            </div>
          </div>
        </section>
        <section className="jobtype-popular container">
          <h2>Most popular in {JobType[0]?.tenLoaiCongViec}</h2>
          <div className="popular-slick">
            <Slider {...settings}>
              <div className="popular-container">
                <div className="popular-item">
                  <img src="/img/JobType/Logo design_2x.webp" alt="..." />
                  <span>Minimalist Logo Design</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
              <div className="popular-container">
                <div className="popular-item">
                  <img
                    src="/img/JobType/Architecture _ Interior Design_2x.webp"
                    alt=""
                  />
                  <span>Architecture & Interior Design</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
              <div className="popular-container">
                <div className="popular-item">
                  <img src="/img/JobType/Web Design.webp" alt="" />
                  <span>Website Design</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
              <div className="popular-container">
                <div className="popular-item">
                  <img src="/img/JobType/Illustration_2x.png" alt="" />
                  <span>Illustration</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
              <div className="popular-container">
                <div className="popular-item">
                  <img src="/img/JobType/Photoshop Editing_2x.png" alt="" />
                  <span>Image Editing</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
              <div className="popular-container">
                <div className="popular-item">
                  <img
                    src="/img/JobType/T-Shirts _ Merchandise_2x.png"
                    alt=""
                  />
                  <span>T-Shirts & Merchandise</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
              <div className="popular-container">
                <div className="popular-item">
                  <img
                    src="/img/JobType/Product _ industrial design.png"
                    alt=""
                  />
                  <span>Industrial & Product Design</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
              <div className="popular-container">
                <div className="popular-item">
                  <img src="/img/JobType/Social Media Design_2x.png" alt="" />
                  <span>Social Media Design</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
              <div className="popular-container">
                <div className="popular-item">
                  <img src="/img/JobType/Nft Art (1).png" alt="" />
                  <span>NFT Art</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        <section className="explore container g-0 g-md-3">
          <h2>Explore {JobType[0]?.tenLoaiCongViec}</h2>
          <div className="explore-content">
            {JobType[0]?.dsNhomChiTietLoai.map((item) => {
              return (
                <div className="explore-item" key={item.id}>
                  <img src={item.hinhAnh} alt="..." />
                  <h3>{item.tenNhom}</h3>
                  {item.dsChiTietLoai.map((detail) => {
                    return (
                      <p key={detail.id}>
                        <NavLink to={`/categories/${detail.id}`}>
                          {detail.tenChiTiet}
                        </NavLink>
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>
        <section className="related-job container">
          <h2 onClick={handleDropdown}>
            Services Related To {JobType[0]?.tenLoaiCongViec}
            <i className="fas fa-chevron-down"></i>
          </h2>
          <h2>Services Related To {JobType[0]?.tenLoaiCongViec}</h2>
          <div className="related-job-tags">
            <span>Minimalist logo design</span>
            <span>Signature logo design</span>
            <span>Mascot logo design</span>
            <span>3d logo design</span>
            <span>Hand drawn logo design</span>
            <span>Vintage logo design</span>
            <span>Remove background</span>
            <span>Photo restoration</span>
            <span>Photo retouching</span>
            <span>Image resize</span>
            <span>Product label design</span>
            <span>Custom twitch overlay</span>
            <span>Custom twitch emotes</span>
            <span>Gaming logo</span>
            <span>Children book illustration</span>
          </div>
        </section>
      </section>
      <Footer />
    </section>
  );
};

export default JobTypes;
