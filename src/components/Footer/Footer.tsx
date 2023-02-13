import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  // dropdow khi chuyen sang mobile
  const handleShowFooter = (b: number) => {
    let showfooter = window.document.querySelectorAll(".footer-top-item");
    for (let i = 0; i < showfooter.length; i++) {
      if (b) {
        showfooter[b - 1].classList.toggle("showfooter");
      }
    }
  };
  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div className="footer-top">
          <div className="footer-top-item" onClick={() => handleShowFooter(1)}>
            <h6>
              Categories<i className="fas fa-chevron-down"></i>
            </h6>
            <ul>
              <li>
                <NavLink to="#" title="Graphics & Design">
                  Graphics & Design
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Digital Marketing">
                  Digital Marketing
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Writing & Transition">
                  Writing & Transition
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Video & Animation">
                  Video & Animation
                </NavLink>
              </li>
              <li>
                <NavLink to="#" title="Music & Audio">
                  Music & Audio
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Programing & Tech">
                  Programing & Tech
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Data">
                  Data
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Business">
                  Business
                </NavLink>
              </li>
              <li>
                <NavLink to="#" title="Lifestyle">
                  Lifestyle
                </NavLink>
              </li>
              <li>
                <NavLink to="#" title="Sitemap">
                  Sitemap
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-top-item" onClick={() => handleShowFooter(2)}>
            <h6>
              Community<i className="fas fa-chevron-down"></i>
            </h6>
            <ul>
              <li>
                <NavLink to="#" title="Events">
                  Events
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Blog">
                  Blog
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Forum">
                  Forum
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Community Standards">
                  Community Standards
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Podcast">
                  Podcast
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Affiliates">
                  Affiliates
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Invite a Friend">
                  Invite a Friend
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Become a Seller">
                  Become a Seller
                </NavLink>{" "}
              </li>
            </ul>
          </div>
          <div className="footer-top-item" onClick={() => handleShowFooter(3)}>
            <h6>
              More From Friverr <i className="fas fa-chevron-down"></i>
            </h6>
            <ul>
              <li>
                <NavLink to="#" title="Friverr Business">
                  Friverr Business
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Friverr Pro">
                  Friverr Pro
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Friverr Studios">
                  Friverr Studios
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Friverr Logo Maker">
                  Friverr Logo Maker
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Friverr Guides">
                  Friverr Guides
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Get Inspired">
                  Get Inspired
                </NavLink>{" "}
              </li>
            </ul>
          </div>
          <div className="footer-top-item" onClick={() => handleShowFooter(4)}>
            <h6>
              About<i className="fas fa-chevron-down"></i>
            </h6>
            <ul>
              <li>
                <NavLink to="#" title="Careers">
                  Careers
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Press & News">
                  Press & News
                </NavLink>
              </li>
              <li>
                <NavLink to="#" title="Partnerships">
                  Partnerships
                </NavLink>
              </li>
              <li>
                <NavLink to="#" title="Privacy Policy">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="#" title="Terms of Service">
                  Terms of Service
                </NavLink>
              </li>
              <li>
                <NavLink to="#" title="Intellectual Property Claims">
                  Intellectual Property Claims
                </NavLink>
              </li>
              <li>
                <NavLink to="#" title="Investor Relations">
                  Investor Relations
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-top-item" onClick={() => handleShowFooter(5)}>
            <h6>
              Support<i className="fas fa-chevron-down"></i>
            </h6>
            <ul>
              <li>
                <NavLink to="#" title="Help & Support">
                  Help & Support
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Trust & Safety">
                  Trust & Safety
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Selling on Friverr">
                  Selling on Friverr
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="#" title="Buying on Friverr">
                  Buying on Friverr
                </NavLink>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <svg
              width="91"
              height="27"
              viewBox="0 0 91 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#7A7D85">
                <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g fill="#7A7D85">
                <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"></path>
              </g>
            </svg>
            <span>© Fiverr Inrernational Ltd. 2022</span>
          </div>
          <div className="footer-bottom-right">
            <ul className="social">
              <li>
                <NavLink to="https://www.twitter.com/" title="Twitter">
                  <i className="fab fa-twitter"></i>
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="https://www.facebook.com/" title="Facebook">
                  <i className="fab fa-facebook"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.linkedin.com/" title="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.pinterest.com/" title="Pinterest">
                  <i className="fab fa-pinterest"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.instagram.com/" title="Instagram">
                  <i className="fab fa-instagram"></i>
                </NavLink>
              </li>
            </ul>
            <div className="setting">
              <NavLink to="#">
                <i className="fa fa-globe"></i>English
              </NavLink>
              <NavLink to="#">
                <i className="fa fa-dollar-sign"></i>USD
              </NavLink>
              <NavLink to="#" className="person">
                <i className="fa fa-male"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
