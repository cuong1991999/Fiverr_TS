import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import CategoriesMenuNoSticky from "../../components/Category/CategoriesMenuNoSticky";
import Footer from "../../components/Footer/Footer";
import HeaderNoSticky from "../../components/Header/HearderNoSticky";
import { Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import {
  getArrCommentApi,
  getJobDetailApi,
} from "../../redux/reducer/JobManagementReducer";
import { useFormik, validateYupSchema } from "formik";
export type Comment = {
  noiDung: string;
  id: string;
  maCongViec: string;
  maNguoiBinhLuan: string;
  ngayBinhLuan: string;
  saoBinhLuan: string;
};
export type Cart = {
  id: string;
  maCongViec: string;
  maNguoiThue: string;
  ngayThue: string;
  hoanThanh: boolean;
};
type Props = {};

const JobDetail = (props: Props) => {
  const { detail, binhLuan } = useSelector(
    (state: RootState) => state.JobManagementReducer
  );

  const today = new Date();
  const date = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()} `;
  console.log(date);

  const dispatch: DispatchType = useDispatch();
  const param: any = useParams();
  const getDetailApi = () => {
    dispatch(getJobDetailApi(param.id));
  };
  const getCommentlApi = () => {
    dispatch(getArrCommentApi(param.id));
  };
  const frm = useFormik<Comment>({
    initialValues: {
      noiDung: "",
      id: "",
      maCongViec: param.id,
      maNguoiBinhLuan: "",
      ngayBinhLuan: date,
      saoBinhLuan: "",
    },
    onSubmit: (values: Comment) => {
      const payload = {
        id: 0,
        maCongViec: values.maCongViec,
        maNguoiBinhLuan: 0,
        ngayBinhLuan: values.ngayBinhLuan,
        noiDung: values.noiDung,
        saoBinhLuan: values.saoBinhLuan,
      };
    },
  });
  const handleCart = () => {
    const payload: Cart = {
      id: "0",
      maCongViec: param.id,
      maNguoiThue: "0",
      ngayThue: date,
      hoanThanh: true,
    };
  };
  useEffect(() => {
    getDetailApi();
  }, [param.id]);
  useEffect(() => {
    getCommentlApi();
  }, [param.id]);

  const renderComment = () => {
    return binhLuan.map((item, index) => {
      return (
        <li className="review-comment-item " key={index}>
          <div className="comment-info ">
            <img
              src={item.avatar}
              alt="..."
              className="review-comment-avatar"
            />
            <div className="comment-name">
              <div className="comment-name-top">
                <span>{item.tenNguoiBinhLuan}</span>
                <i className="fas fa-star"></i>
                <span>{item.saoBinhLuan}</span>
                <span>{item.ngayBinhLuan}</span>
              </div>
              <div className="comment-name-bot">
                <img src="/img/JobType/1f1fa-1f1f8.png" alt="..." />
                <span>United States</span>
              </div>
            </div>
          </div>
          <div className="comment-description">
            <p>{item.noiDung}</p>
            <div className="thums">
              <span>Helpful?</span>
              <div className="thums-icon">
                <div className="yes">
                  <i className="far fa-thumbs-up"></i>
                  <span>Yes</span>
                </div>
                <div className="no">
                  <i className="far fa-thumbs-down"></i>
                  <span>No</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });
  };
  return (
    <section>
      <HeaderNoSticky />
      <CategoriesMenuNoSticky />
      <section className="jobdetail">
        <div className="container d-flex justify-content-between">
          <div className="col-7 jobdetail-left">
            <div className="jobdetail-link">
              <span>
                <NavLink
                  to={`/jobtype/${detail[0]?.congViec.maChiTietLoaiCongViec}`}
                >
                  {detail[0]?.tenLoaiCongViec}
                </NavLink>
              </span>
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
              <span>
                <NavLink
                  to={`/jobtype/${detail[0]?.congViec.maChiTietLoaiCongViec}`}
                >
                  {detail[0]?.tenNhomChiTietLoai}
                </NavLink>
              </span>
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
              <span>
                <NavLink
                  to={`/jobtype/${detail[0]?.congViec.maChiTietLoaiCongViec}`}
                >
                  {detail[0]?.tenChiTietLoai}
                </NavLink>
              </span>
            </div>
            <div className="jobdeital-info">
              <h2>{detail[0]?.congViec.tenCongViec}</h2>
              <div className="jobdetail-seller">
                <div className="seller-avatar">
                  <img src={detail[0]?.avatar} alt="..." />
                </div>
                <div className="seller-name">
                  <span>{detail[0]?.tenNguoiTao}</span>
                </div>
                <div className="seller-level">
                  <span>Level {detail[0]?.congViec.saoCongViec} seller</span>
                </div>
                <div className="seller-rate">
                  <div className="star ">
                    <Rate disabled defaultValue={5} />
                  </div>
                  <div className="score">{detail[0]?.congViec.saoCongViec}</div>
                  <div className="rating">({detail[0]?.congViec.danhGia})</div>
                </div>
                <div className="seller-order">4 Orders in Queue</div>
              </div>
              <div className="jobdetail-img">
                <img src={detail[0]?.congViec.hinhAnh} alt="..." />
              </div>
              <div className="checkout mobile">
                <ul
                  className="nav nav-tabs checkout-header"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="basic-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Basic
                    </button>
                  </li>
                  <li className="nav-item center" role="presentation">
                    <button
                      className="nav-link"
                      id="standard-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Standard
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="premium-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#messages"
                      type="button"
                      role="tab"
                      aria-controls="messages"
                      aria-selected="false"
                    >
                      Premium
                    </button>
                  </li>
                </ul>
                <div className="tab-content checkout-body">
                  <div
                    className="tab-pane active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="basic-tab"
                  >
                    <div className="title">
                      <span>Basic</span>
                      <span>US${detail[0]?.congViec.giaTien}</span>
                    </div>
                    <p className="description">
                      {detail[0]?.congViec.moTaNgan}
                    </p>
                    <div className="delivery-revision">
                      <div className="dr-item">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#62646a"
                            d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
                          ></path>
                          <path fill="#62646a" d="M9 4H7v5h5V7H9V4z"></path>
                        </svg>
                        <span>14 Days Delivery</span>
                      </div>
                      <div className="dr-item">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#62646a"
                            d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"
                          ></path>
                          <path
                            fill="#62646a"
                            d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"
                          ></path>
                        </svg>
                        <span>Unlimited Revisions</span>
                      </div>
                    </div>
                    <ul className="feature">
                      <li className="feature-items">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#1dbf73"
                        >
                          <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                        </svg>
                        <span>Good fearture</span>
                      </li>
                      <li className="feature-items">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#1dbf73"
                        >
                          <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                        </svg>
                        <span>Good fearture</span>
                      </li>
                      <li className="feature-items">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#1dbf73"
                        >
                          <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                        </svg>
                        <span>Good fearture</span>
                      </li>
                    </ul>
                    <button className="submit-checkout">
                      Continue (US${detail[0]?.congViec.giaTien})
                    </button>
                    <a href="#compare" className="compare">
                      Compare Packages
                    </a>
                  </div>
                  <div
                    className="tab-pane"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="standard-tab"
                  >
                    <div className="title">
                      <span>Standard</span>
                      <span>US${detail[0]?.congViec.giaTien}</span>
                    </div>
                    <p className="description">
                      {detail[0]?.congViec.moTaNgan}
                    </p>
                    <div className="delivery-revision">
                      <div className="dr-item">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#62646a"
                            d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
                          ></path>
                          <path fill="#62646a" d="M9 4H7v5h5V7H9V4z"></path>
                        </svg>
                        <span>14 Days Delivery</span>
                      </div>
                      <div className="dr-item">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#62646a"
                            d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"
                          ></path>
                          <path
                            fill="#62646a"
                            d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"
                          ></path>
                        </svg>
                        <span>Unlimited Revisions</span>
                      </div>
                    </div>
                    <ul className="feature">
                      <li className="feature-items">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#1dbf73"
                        >
                          <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                        </svg>
                        <span>Good fearture</span>
                      </li>
                      <li className="feature-items">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#1dbf73"
                        >
                          <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                        </svg>
                        <span>Good fearture</span>
                      </li>
                      <li className="feature-items">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#1dbf73"
                        >
                          <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                        </svg>
                        <span>Good fearture</span>
                      </li>
                    </ul>
                    <button className="submit-checkout">
                      Continue (US${detail[0]?.congViec.giaTien})
                    </button>
                    <a href="#compare" className="compare">
                      Compare Packages
                    </a>
                  </div>
                  <div
                    className="tab-pane"
                    id="messages"
                    role="tabpanel"
                    aria-labelledby="premium-tab"
                  >
                    <div className="title">
                      <span>Premium</span>
                      <span>US${detail[0]?.congViec.giaTien}</span>
                    </div>
                    <p className="description">
                      {detail[0]?.congViec.moTaNgan}
                    </p>
                    <div className="delivery-revision">
                      <div className="dr-item">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#62646a"
                            d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
                          ></path>
                          <path fill="#62646a" d="M9 4H7v5h5V7H9V4z"></path>
                        </svg>
                        <span>14 Days Delivery</span>
                      </div>
                      <div className="dr-item">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#62646a"
                            d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"
                          ></path>
                          <path
                            fill="#62646a"
                            d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"
                          ></path>
                        </svg>
                        <span>Unlimited Revisions</span>
                      </div>
                    </div>
                    <ul className="feature">
                      <li className="feature-items">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#1dbf73"
                        >
                          <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                        </svg>
                        <span>Good fearture</span>
                      </li>
                      <li className="feature-items">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#1dbf73"
                        >
                          <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                        </svg>
                        <span>Good fearture</span>
                      </li>
                      <li className="feature-items">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 11 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#1dbf73"
                        >
                          <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                        </svg>
                        <span>Good fearture</span>
                      </li>
                    </ul>
                    <button className="submit-checkout">
                      Continue (US${detail[0]?.congViec.giaTien})
                    </button>
                    <a href="#compare" className="compare">
                      Compare Packages
                    </a>
                  </div>
                </div>
              </div>
              <div className="jobdetail-description">
                <h2>About This Gig</h2>
                <p className="descriptions">{detail[0]?.congViec.moTa}</p>
              </div>
              <div className="about-seller">
                <h2>About The Seller</h2>
                <div className="about-profile">
                  <div className="about-avatar">
                    <img src={detail[0]?.avatar} alt="..." />
                  </div>
                  <div className="about-info">
                    <h3>{detail[0]?.tenNguoiTao}</h3>
                    <p>{detail[0]?.tenLoaiCongViec}</p>
                    <div className="about-rate">
                      <div className="star d-flex">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1792 1792"
                            width="16"
                            height="16"
                          >
                            <path
                              fill="#ffbe5b"
                              d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                            ></path>
                          </svg>
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1792 1792"
                            width="16"
                            height="16"
                          >
                            <path
                              fill="#ffbe5b"
                              d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                            ></path>
                          </svg>
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1792 1792"
                            width="16"
                            height="16"
                          >
                            <path
                              fill="#ffbe5b"
                              d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                            ></path>
                          </svg>
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1792 1792"
                            width="16"
                            height="16"
                          >
                            <path
                              fill="#ffbe5b"
                              d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                            ></path>
                          </svg>
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1792 1792"
                            width="16"
                            height="16"
                          >
                            <path
                              fill="#ffbe5b"
                              d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <div className="score">
                        {detail[0]?.congViec.saoCongViec}
                      </div>
                      <div className="rating">
                        ({detail[0]?.congViec.danhGia})
                      </div>
                    </div>
                    <button className="btn about-btn">Contact Me</button>
                  </div>
                </div>
              </div>
              <div className="faq">
                <h2>FAQ</h2>
                <ul className="faq-list">
                  <li className="faq-item">
                    <input type="checkbox" hidden id="item1" />

                    <label htmlFor="item1" className="faq-dropdown">
                      <span> Delivery time for 500 words?</span>
                      <i className="fas fa-chevron-down"></i>
                    </label>
                    <p>Within 24 hours</p>
                  </li>
                  <li className="faq-item">
                    <input type="checkbox" hidden id="item2" />
                    <label htmlFor="item2" className="faq-dropdown">
                      <span> Do I use Copyscape?</span>
                      <i className="fas fa-chevron-down"></i>
                    </label>
                    <p>Yes, I use a premium plan of Copyscape.</p>
                  </li>
                </ul>
              </div>
              <div className="rating-review">
                <div className="review">
                  <div className="count">
                    <span>{detail[0]?.congViec.danhGia} Reviews</span>
                    <div className="star">
                      <span>
                        <i className="fas fa-star"></i>
                      </span>
                      <span>
                        <i className="fas fa-star"></i>
                      </span>
                      <span>
                        <i className="fas fa-star"></i>
                      </span>
                      <span>
                        <i className="fas fa-star"></i>
                      </span>
                      <span>
                        <i className="fas fa-star"></i>
                      </span>
                    </div>
                    <span>{detail[0]?.congViec.saoCongViec}</span>
                  </div>
                  <div className="sort">
                    <span>Sort By</span>
                    <select>
                      <option value="recent">Most Recent</option>
                      <option value="relevant">Most Relevant</option>
                    </select>
                  </div>
                </div>
                <div className="review-rating row">
                  <div className="col-12  col-lg-6">
                    <table>
                      <tbody className="star-counter">
                        <tr>
                          <td className="star-btn">
                            <button>5 Stars</button>
                          </td>
                          <td className="process-bar-container">
                            <div className="process-bar first"></div>
                          </td>
                          <td className="star-num">
                            <span>({detail[0]?.congViec.danhGia})</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="star-btn">
                            <button>4 Stars</button>
                          </td>
                          <td className="process-bar-container">
                            <div className="process-bar"></div>
                          </td>
                          <td className="star-num">
                            <span>(0)</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="star-btn">
                            <button>3 Stars</button>
                          </td>
                          <td className="process-bar-container">
                            <div className="process-bar"></div>
                          </td>
                          <td className="star-num">
                            <span>(0)</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="star-btn">
                            <button>2 Stars</button>
                          </td>
                          <td className="process-bar-container">
                            <div className="process-bar"></div>
                          </td>
                          <td className="star-num">
                            <span>(0)</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="star-btn">
                            <button>1 Stars</button>
                          </td>
                          <td className="process-bar-container">
                            <div className="process-bar"></div>
                          </td>
                          <td className="star-num">
                            <span>(0)</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="ranking">
                      <h6>Rating Breakdown</h6>
                      <ul className="ranking-list">
                        <li className="ranking-item">
                          <span>Seller communication level</span>
                          <span>
                            <i className="fas fa-star"></i> 5
                          </span>
                        </li>
                        <li className="ranking-item">
                          <span>Recommend to a friend</span>
                          <span>
                            <i className="fas fa-star"></i> 5
                          </span>
                        </li>
                        <li className="ranking-item">
                          <span>Service as described</span>
                          <span>
                            <i className="fas fa-star"></i> 5
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="review-comment">
                <ul className="review-comment-list">{renderComment()}</ul>
              </div>
              <div className="add-comment">
                <div className="add-comment-title">
                  <span>Leave some comments</span>
                  <Rate allowHalf defaultValue={5} />
                </div>
                <form onSubmit={frm.handleSubmit}>
                  <textarea
                    name="noiDung"
                    cols={100}
                    onChange={frm.handleChange}
                    rows={5}
                  ></textarea>
                  <button className="comment-btn">Comment</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-4 jobdetail-right">
            <div className="checkout">
              <ul
                className="nav nav-tabs checkout-header"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="basic-pc"
                    data-bs-toggle="tab"
                    data-bs-target="#basic-pc1"
                    type="button"
                    role="tab"
                    aria-controls="basic-pc1"
                    aria-selected="true"
                  >
                    Basic
                  </button>
                </li>
                <li className="nav-item center" role="presentation">
                  <button
                    className="nav-link"
                    id="standard-pc"
                    data-bs-toggle="tab"
                    data-bs-target="#standard-pc1"
                    type="button"
                    role="tab"
                    aria-controls="standard-pc1"
                    aria-selected="false"
                  >
                    Standard
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="premium-pc"
                    data-bs-toggle="tab"
                    data-bs-target="#premium-pc1"
                    type="button"
                    role="tab"
                    aria-controls="premium-pc1"
                    aria-selected="false"
                  >
                    Premium
                  </button>
                </li>
              </ul>
              <div className="tab-content checkout-body">
                <div
                  className="tab-pane active"
                  id="basic-pc1"
                  role="tabpanel"
                  aria-labelledby="basic-pc"
                >
                  <div className="title">
                    <span>Basic</span>
                    <span>US${detail[0]?.congViec.giaTien}</span>
                  </div>
                  <p className="description">{detail[0]?.congViec.moTaNgan}</p>
                  <div className="delivery-revision">
                    <div className="dr-item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#62646a"
                          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
                        ></path>
                        <path fill="#62646a" d="M9 4H7v5h5V7H9V4z"></path>
                      </svg>
                      <span>14 Days Delivery</span>
                    </div>
                    <div className="dr-item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#62646a"
                          d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"
                        ></path>
                        <path
                          fill="#62646a"
                          d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"
                        ></path>
                      </svg>
                      <span>Unlimited Revisions</span>
                    </div>
                  </div>
                  <ul className="feature">
                    <li className="feature-items">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                    <li className="feature-items">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                    <li className="feature-items">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                  </ul>
                  <button className="submit-checkout">
                    Continue (US${detail[0]?.congViec.giaTien})
                  </button>
                  <a href="#compare" className="compare">
                    Compare Packages
                  </a>
                </div>
                <div
                  className="tab-pane"
                  id="standard-pc1"
                  role="tabpanel"
                  aria-labelledby="standard-pc"
                >
                  <div className="title">
                    <span>Standard</span>
                    <span>US${detail[0]?.congViec.giaTien}</span>
                  </div>
                  <p className="description">{detail[0]?.congViec.moTaNgan}</p>
                  <div className="delivery-revision">
                    <div className="dr-item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#62646a"
                          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
                        ></path>
                        <path fill="#62646a" d="M9 4H7v5h5V7H9V4z"></path>
                      </svg>
                      <span>14 Days Delivery</span>
                    </div>
                    <div className="dr-item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#62646a"
                          d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"
                        ></path>
                        <path
                          fill="#62646a"
                          d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"
                        ></path>
                      </svg>
                      <span>Unlimited Revisions</span>
                    </div>
                  </div>
                  <ul className="feature">
                    <li className="feature-items">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                    <li className="feature-items">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                    <li className="feature-items">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                  </ul>
                  <button className="submit-checkout">
                    Continue (US${detail[0]?.congViec.giaTien})
                  </button>
                  <a href="#compare" className="compare">
                    Compare Packages
                  </a>
                </div>
                <div
                  className="tab-pane"
                  role="tabpanel"
                  id="premium-pc1"
                  aria-labelledby="premium-pc"
                >
                  <div className="title">
                    <span>Premium</span>
                    <span>US${detail[0]?.congViec.giaTien}</span>
                  </div>
                  <p className="description">{detail[0]?.congViec.moTaNgan}</p>
                  <div className="delivery-revision">
                    <div className="dr-item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#62646a"
                          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
                        ></path>
                        <path fill="#62646a" d="M9 4H7v5h5V7H9V4z"></path>
                      </svg>
                      <span>14 Days Delivery</span>
                    </div>
                    <div className="dr-item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#62646a"
                          d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"
                        ></path>
                        <path
                          fill="#62646a"
                          d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"
                        ></path>
                      </svg>
                      <span>Unlimited Revisions</span>
                    </div>
                  </div>
                  <ul className="feature">
                    <li className="feature-items">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                    <li className="feature-items">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                    <li className="feature-items">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#1dbf73"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                      <span>Good fearture</span>
                    </li>
                  </ul>
                  <button className="submit-checkout">
                    Continue (US${detail[0]?.congViec.giaTien})
                  </button>
                  <a href="#compare" className="compare">
                    Compare Packages
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default JobDetail;
