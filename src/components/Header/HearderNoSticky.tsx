import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { KeySearch } from "./Header";
import { history } from "../..";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { removeStore, ACCESS_TOKEN, USER_LOGIN } from "../../util/config";
type Props = {};

const HeaderNoSticky = (props: Props) => {
  const { userLogin } = useSelector((state: RootState) => state.userReducer);
  // dung duoc cac trang khac ngoai trang home
  //render menu
  const { arrMenu } = useSelector(
    (state: RootState) => state.JobManagementReducer
  );
  // dung cho search
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
  // dropdown mobile
  const handleDropdown = () => {
    let show = window.document.querySelector(".sidebar-categories");
    show?.classList.toggle("show");
  };
  return (
    <header className="header sticky nosticky">
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
                  {userLogin ? (
                    <div className="dropdown ">
                      <span
                        className=" sidebar-item dropdown-toggle"
                        id="dropdownMenuButton10"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {userLogin.name}
                      </span>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton10"
                      >
                        <li className="mb-3">
                          <NavLink className="dropdown-item" to="/profile">
                            Profile
                          </NavLink>
                        </li>
                        {userLogin.role === "ADMIN" && (
                          <li className="mb-3">
                            <NavLink
                              style={{ color: "#212529" }}
                              className="dropdown-item"
                              to="/admin/managejobtype"
                            >
                              Admin
                            </NavLink>
                          </li>
                        )}
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={() => {
                              removeStore(USER_LOGIN);
                              removeStore(ACCESS_TOKEN);
                              window.location.href = "/login";
                            }}
                          >
                            Sign out
                          </div>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <>
                      {" "}
                      <NavLink
                        to={"/register"}
                        className="sidebar-btn sidebar-item"
                      >
                        Join Fiverr
                      </NavLink>
                      <NavLink to={"/login"} className=" sidebar-item">
                        Sign in
                      </NavLink>
                    </>
                  )}

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
                      {arrMenu.slice(0, 8).map((item) => {
                        return (
                          <NavLink
                            to={`/jobtype/${item.id}`}
                            className={"category-item"}
                            key={item.id}
                          >
                            {item.tenLoaiCongViec}
                          </NavLink>
                        );
                      })}
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
                  type="text"
                  name="keyword"
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
                {userLogin ? (
                  <>
                    <li className="dropdown li_1 ">
                      <span
                        className=" sidebar-item dropdown-toggle"
                        id="dropdownMenuButton11"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ cursor: "pointer" }}
                      >
                        {userLogin.name}
                      </span>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton11"
                      >
                        <li className="mb-3">
                          <NavLink
                            className="dropdown-item"
                            style={{ color: "#212529" }}
                            to="/profile"
                          >
                            Profile
                          </NavLink>
                        </li>
                        {userLogin.role === "ADMIN" && (
                          <li className="mb-3">
                            <NavLink
                              style={{ color: "#212529" }}
                              className="dropdown-item"
                              to="/admin/managejobtype"
                            >
                              Admin
                            </NavLink>
                          </li>
                        )}
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={() => {
                              removeStore(USER_LOGIN);
                              removeStore(ACCESS_TOKEN);
                              window.location.href = "/login";
                            }}
                          >
                            Sign out
                          </div>
                        </li>
                      </ul>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="li_1">
                      <NavLink to={"/login"}>Sign in</NavLink>
                    </li>
                    <li className="join">
                      <NavLink to={"/register"}>Join</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderNoSticky;
