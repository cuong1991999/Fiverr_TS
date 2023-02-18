import React from "react";
import { memo } from "react";
type Props = {};

const Advertisement = (props: Props) => {
  // show video va play video
  const handldeShow = () => {
    let show = window.document.querySelector(".video");
    let load = window.document.querySelector("video");
    show?.classList.toggle("show");
    load?.play();
  };
  // tat video va pause
  const handleReShow = () => {
    let reshow = window.document.querySelector(".video");
    let load = window.document.querySelector("video");
    load?.pause();

    reshow?.classList.toggle("show");
  };
  return (
    <section className="advertisement ">
      <div className="container">
        <div className="advertisement-wrapper row">
          <div className="col-12 col-lg-6 advertisement-content">
            <h2>A whole world of freelance talent at your fingertips</h2>
            <ul className="advertisement-list">
              <li className="advertisement-item">
                <h6>
                  <i className="far fa-check-circle"></i>
                  The best for every budget
                </h6>
                <p>
                  Find high-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </li>
              <li className="advertisement-item">
                <h6>
                  <i className="far fa-check-circle"></i>
                  Quality work done quickly
                </h6>
                <p>
                  Find the right freelancer to begin working on your project
                  within minutes.
                </p>
              </li>
              <li className="advertisement-item">
                <h6>
                  <i className="far fa-check-circle"></i>
                  Protected payments, every time
                </h6>
                <p>
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
                </p>
              </li>
              <li className="advertisement-item">
                <h6>
                  <i className="far fa-check-circle"></i>
                  24/7 support
                </h6>
                <p>
                  Questions? Our round-the-clock support team is available to
                  help anytime, anywhere.
                </p>
              </li>
            </ul>
          </div>
          <div
            className="col-12 col-lg-6 advertisement-img"
            onClick={handldeShow}
          >
            <img
              src="./img/Advertisement/advertisement-img.webp"
              alt="..."
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="video">
        <div className="video-overplay" onClick={handleReShow}></div>
        <video
          src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
          controls
        ></video>
      </div>
    </section>
  );
};

export default memo(Advertisement);
