import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
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
                <a href="#" title="Graphics & Design">
                  Graphics & Design
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Digital Marketing">
                  Digital Marketing
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Writing & Transition">
                  Writing & Transition
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Video & Animation">
                  Video & Animation
                </a>
              </li>
              <li>
                <a href="#" title="Music & Audio">
                  Music & Audio
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Programing & Tech">
                  Programing & Tech
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Data">
                  Data
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Business">
                  Business
                </a>
              </li>
              <li>
                <a href="#" title="Lifestyle">
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="#" title="Sitemap">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-top-item" onClick={() => handleShowFooter(2)}>
            <h6>
              Community<i className="fas fa-chevron-down"></i>
            </h6>
            <ul>
              <li>
                <a href="#" title="Events">
                  Events
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Blog">
                  Blog
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Forum">
                  Forum
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Community Standards">
                  Community Standards
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Podcast">
                  Podcast
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Affiliates">
                  Affiliates
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Invite a Friend">
                  Invite a Friend
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Become a Seller">
                  Become a Seller
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="footer-top-item" onClick={() => handleShowFooter(3)}>
            <h6>
              More From Friverr <i className="fas fa-chevron-down"></i>
            </h6>
            <ul>
              <li>
                <a href="#" title="Friverr Business">
                  Friverr Business
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Friverr Pro">
                  Friverr Pro
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Friverr Studios">
                  Friverr Studios
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Friverr Logo Maker">
                  Friverr Logo Maker
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Friverr Guides">
                  Friverr Guides
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Get Inspired">
                  Get Inspired
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="footer-top-item" onClick={() => handleShowFooter(4)}>
            <h6>
              About<i className="fas fa-chevron-down"></i>
            </h6>
            <ul>
              <li>
                <a href="#" title="Careers">
                  Careers
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Press & News">
                  Press & News
                </a>
              </li>
              <li>
                <a href="#" title="Partnerships">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#" title="Privacy Policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" title="Terms of Service">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" title="Intellectual Property Claims">
                  Intellectual Property Claims
                </a>
              </li>
              <li>
                <a href="#" title="Investor Relations">
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-top-item" onClick={() => handleShowFooter(5)}>
            <h6>
              Support<i className="fas fa-chevron-down"></i>
            </h6>
            <ul>
              <li>
                <a href="#" title="Help & Support">
                  Help & Support
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Trust & Safety">
                  Trust & Safety
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Selling on Friverr">
                  Selling on Friverr
                </a>{" "}
              </li>
              <li>
                <a href="#" title="Buying on Friverr">
                  Buying on Friverr
                </a>{" "}
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
                <a href="https://www.twitter.com/" title="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>{" "}
              </li>
              <li>
                <a href="https://www.facebook.com/" title="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" title="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/" title="Pinterest">
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" title="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <div className="setting">
              <a href="#">
                <i className="fa fa-globe"></i>English
              </a>
              <a href="#">
                <i className="fa fa-dollar-sign"></i>USD
              </a>
              <a href="#" className="person">
                <i className="fa fa-male"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
