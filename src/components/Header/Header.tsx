import React from "react";
import { NavLink } from "react-router-dom";

import { useFormik } from "formik";

import { history } from "../..";
export type KeySearch = {
  keyword: string;
};
type Props = {};

const Header = (props: Props) => {
  const frmSearch = useFormik<KeySearch>({
    initialValues: {
      keyword: "",
    },
    onSubmit: (values: KeySearch) => {
      if (values.keyword === "") {
        history.push("/home");
      } else {
        history.push(`/search/${values.keyword}`);
      }
    },
  });
  const handleDropdown = () => {
    let show = window.document.querySelector(".sidebar-categories");
    show?.classList.toggle("show");
  };
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="container  header_container">
          <div className="header-left">
            <label htmlFor="nav__icon" className="navbar__btn">
              <i className="fas fa-bars"></i>
            </label>
            <input
              type="checkbox"
              hidden
              className="nav__input"
              id="nav__icon"
            />
            <label htmlFor="nav__icon" className="nav__overplay"></label>
            <nav className="nav__mobile">
              <label htmlFor="nav__icon" className="nav-close">
                <i className="far fa-times-circle"></i>
              </label>
              <div className="nav__mobile-list">
                <div className="sidebar__menu">
                  <NavLink
                    to={"/register"}
                    className="sidebar-btn sidebar-item"
                  >
                    Join Fiverr
                  </NavLink>
                  <NavLink to={"/login"} className=" sidebar-item">
                    Sign in
                  </NavLink>
                  <div className={"sidebar-item sidebar-green"}>
                    Fiverr Business
                  </div>
                  <div className={"sidebar-item"}>Explore</div>
                  <div className={"sidebar-item"}>English</div>
                  <div className={"sidebar-item"}>US$ USD</div>
                  <NavLink to={"/home"} className={"sidebar-item sidebar-home"}>
                    Home
                  </NavLink>
                  <div className="sidebar-categories">
                    <div className="category-collapse" onClick={handleDropdown}>
                      Categories
                      <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="categories__menu">
                      <NavLink to="" className={"category-item"}>
                        Graphics & Design
                      </NavLink>
                      <NavLink to="" className={"category-item"}>
                        Digital Marketing
                      </NavLink>
                      <NavLink to="" className={"category-item"}>
                        Writing & Translation
                      </NavLink>
                      <NavLink to="" className={"category-item"}>
                        Video & Animation
                      </NavLink>
                      <NavLink to="" className={"category-item"}>
                        Music & Audio
                      </NavLink>
                      <NavLink to="" className={"category-item"}>
                        Life Style
                      </NavLink>
                      <NavLink to="" className={"category-item"}>
                        Project Management
                      </NavLink>
                      <NavLink to="" className={"category-item"}>
                        Trending
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <NavLink to={"/home"} className={"nav__logo"}>
              fiverr<i className="fas fa-circle text-success"></i>
            </NavLink>
            <div className="header__search">
              <form className="input-group" onSubmit={frmSearch.handleSubmit}>
                <input
                  name="keyword"
                  type="text"
                  className="form-control"
                  placeholder="Find Services"
                  onChange={frmSearch.handleChange}
                />
                <button type="submit" className="btn  btn__search">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="header-right">
            <div className="header__navbar">
              <ul className="header_navbar-list">
                <li className="li_1 li_fiverr">Fiverr Business</li>
                <li className="li_1">Explore</li>
                <li className="li_1">
                  <i className="fas fa-globe"></i>English
                </li>
                <li className="li_1">US$ USD</li>
                <li className="li_1">Become a Seller</li>
                <li className="li_1">
                  <NavLink to={"/login"}>Sign in</NavLink>
                </li>
                <li className="join">
                  <NavLink to={"/register"}>Join</NavLink>
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
