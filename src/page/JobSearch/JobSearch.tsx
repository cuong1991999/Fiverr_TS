import React, { useEffect, memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardJob from "../../components/CardJob/CardJob";
import CategoriesMenuNoSticky from "../../components/Category/CategoriesMenuNoSticky";
import Footer from "../../components/Footer/Footer";
import HeaderNoSticky from "../../components/Header/HearderNoSticky";
import Pagination from "../../components/Pagination/Pagination";
import { DispatchType, RootState } from "../../redux/configStore";
import {
  getSearchApi,
  PaginationAction,
} from "../../redux/reducer/JobManagementReducer";

type Props = {};

const JobSearch = (props: Props) => {
  const params: any = useParams();
  const { arrSearch, arrPagination } = useSelector(
    (state: RootState) => state.JobManagementReducer
  );
  const dispacth: DispatchType = useDispatch();
  const getJobApi = () => {
    dispacth(getSearchApi(params.id));
  };
  useEffect(() => {
    getJobApi();
  }, [params.id]);
  const renderJob = () => {
    if (arrPagination.length > 0) {
      return arrPagination.map((item, index) => {
        return (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 "
            key={item.id}
          >
            <CardJob Job={item} />
          </div>
        );
      });
    }
    return arrSearch.slice(0, 8).map((item, index) => {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 " key={item.id}>
          <CardJob Job={item} />
        </div>
      );
    });
  };
  return (
    <section className="jobsearch">
      <HeaderNoSticky />
      <CategoriesMenuNoSticky />
      <section className="search-result">
        <div className="container">
          <div className="result-title">
            <span>Results for "{params.id}"</span>
          </div>
          <div className="result-topbar">
            <div className="result-topbar-dropdown">
              <div className="dropdown">
                <a
                  className="btn btn-dropdown dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      All Categories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Web Programing<span>(20,566)</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Data Entry<span>(12,566)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <a
                  className="btn btn-dropdown dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Logo Option
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      All Categories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Web Programing<span>(20,566)</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Data Entry<span>(12,566)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <a
                  className="btn btn-dropdown dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Seller Details
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      All Categories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Web Programing<span>(20,566)</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Data Entry<span>(12,566)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <a
                  className="btn btn-dropdown dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Budget
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      All Categories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Web Programing<span>(20,566)</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Data Entry<span>(12,566)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <a
                  className="btn btn-dropdown dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Delivery Time
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      All Categories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Web Programing<span>(20,566)</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Data Entry<span>(12,566)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="result-topbar-toggle">
              <div className="toggle">
                <label htmlFor="toggle-bar1" className="switch">
                  <input type="checkbox" id="toggle-bar1" hidden />
                  <span className="silder-round"></span>
                </label>
                <span className="toggle-title">Pro services</span>
              </div>
              <div className="toggle">
                <label htmlFor="toggle-bar2" className="switch">
                  <input type="checkbox" id="toggle-bar2" hidden />
                  <span className="silder-round"></span>
                </label>
                <span className="toggle-title">Local sellers</span>
              </div>
              <div className="toggle">
                <label htmlFor="toggle-bar3" className="switch">
                  <input type="checkbox" id="toggle-bar3" hidden />
                  <span className="silder-round"></span>
                </label>
                <span className="toggle-title">Online sellers</span>
              </div>
            </div>
          </div>
          <div className="result-sort">
            <div className="sort-number">
              <span>{arrSearch.length} services available</span>
            </div>
            <div className="sort-by">
              <span>Sort by</span>
              <select>
                <option value="relevance">Relevance</option>
                <option value="bestselling">Best Selling</option>
                <option value="newarrival">New Arrivals</option>
              </select>
            </div>
          </div>
          <div className="result-service">
            <div className="row">{renderJob()}</div>
            <div className="d-flex justify-content-center mt-4">
              <Pagination length={arrSearch.length} arr={arrSearch} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default memo(JobSearch);
