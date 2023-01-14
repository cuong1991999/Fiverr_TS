import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Marketplace = (props: Props) => {
  return (
    <section className="marketplace container">
      <h2>Explore the marketplace</h2>
      <ul className="marketplace-list">
        <li className="marketplace-item">
          <NavLink to="">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
              alt="..."
            />
            <span>Graphics & Design</span>
          </NavLink>
        </li>
        <li className="marketplace-item">
          <NavLink to="">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
              alt="..."
            />
            <span>Digital Marketing</span>
          </NavLink>
        </li>
        <li className="marketplace-item">
          <NavLink to="">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
              alt="..."
            />
            <span>Writing & Translation</span>
          </NavLink>
        </li>
        <li className="marketplace-item">
          <NavLink to="">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
              alt="..."
            />
            <span>Video & Animation</span>
          </NavLink>
        </li>
        <li className="marketplace-item">
          <NavLink to="">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
              alt="..."
            />
            <span>Music & Audio</span>
          </NavLink>
        </li>
        <li className="marketplace-item">
          <NavLink to="">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
              alt="..."
            />
            <span>Programming & Tech</span>
          </NavLink>
        </li>
        <li className="marketplace-item">
          <NavLink to="">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
              alt="..."
            />
            <span>Business</span>
          </NavLink>
        </li>
        <li className="marketplace-item">
          <NavLink to="">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
              alt="..."
            />
            <span>Lifestyle</span>
          </NavLink>
        </li>
        <li className="marketplace-item">
          <NavLink to="">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
              alt="..."
            />
            <span>Data</span>
          </NavLink>
        </li>
        <li className="marketplace-item">
          <NavLink to="">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
              alt="..."
            />
            <span>Photography</span>
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Marketplace;
