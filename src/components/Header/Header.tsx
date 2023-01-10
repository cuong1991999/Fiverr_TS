import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header bg-dark">
      <div className="header-wrapper">
        <div className="container  header_container">
          <div className="header-left">
            <label htmlFor="nav__icon" className="navbar__btn">
              <i className="fas fa-bars"></i>
            </label>
            <input
              type="checkbox"
              hidden
              className="nav__input--mobile"
              id="nav__icon"
            />
            <label htmlFor="nav__icon" className="nav__overplay"></label>
            <nav className="nav__mobile">
              <label htmlFor="nav__icon"></label>
              <ul className="nav__mobile-list"></ul>
            </nav>
            <NavLink to={"/home"} className={"nav__logo"}>
              fiverr<i className="fas fa-circle text-success"></i>
            </NavLink>
            <div className="header__search">
              <form className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Find Services"
                />
                <button className="btn  btn__search">Search</button>
              </form>
            </div>
          </div>
          <div className="header-right">
            <div className="header__narbar">
              <ul className="header_navbar-list">
                <li className="li_1 li_fiverr">Fiverr Business</li>
                <li className="li_1">Explore</li>
                <li className="li_1">
                  <i className="fas fa-globe"></i>English
                </li>
                <li className="li_1">US$ USD</li>
                <li className="li_1">Become a Seller</li>
                <li className="li_1">
                  <NavLink to={"/register"}>Sign in</NavLink>
                </li>
                <li className="join">
                  <NavLink to={"/login"}>Join</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
