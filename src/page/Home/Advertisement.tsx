import React from "react";

type Props = {};

const Advertisement = (props: Props) => {
  return (
    <section className="advertisement container">
      <div className="advertisement-wrapper row">
        <div className="col-12 col-lg-6 advertisement-content">
          <h2></h2>
          <ul className="advertisement-list">
            <li className="advertisement-item">
              <h6></h6>
              <p></p>
            </li>
            <li className="advertisement-item">
              <h6></h6>
              <p></p>
            </li>
            <li className="advertisement-item">
              <h6></h6>
              <p></p>
            </li>
            <li className="advertisement-item">
              <h6></h6>
              <p></p>
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-6 advertisement-img">
          <img
            src="./img/Advertisement/advertisement-img.webp"
            alt="..."
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
