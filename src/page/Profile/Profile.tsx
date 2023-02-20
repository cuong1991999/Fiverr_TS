import { useFormik } from "formik";
import * as yup from "yup";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import {
  delJobrentApi,
  getJobrentApi,
  getProfileApi,
  updateProfileApi,
  UserProfile,
} from "../../redux/reducer/userReducer";
import Footer from "../../components/Footer/Footer";
import HeaderNoSticky from "../../components/Header/HearderNoSticky";
import CategoriesMenuNoSticky from "../../components/Category/CategoriesMenuNoSticky";
import { NavLink, Navigate } from "react-router-dom";
import { getStoreJson, USER_LOGIN } from "../../util/config";
import { history } from "../..";

type Props = {};

const Profile = (props: Props) => {
  const { userLogin, arrJobRent } = useSelector(
    (state: RootState) => state.userReducer
  );

  const dispatch = useDispatch<DispatchType>();
  useEffect(() => {
    if (!userLogin) {
      alert("You are not logged in !");
      return history.push("/login");
    }
  }, []);
  useEffect(() => {
    dispatch(getProfileApi(userLogin?.id!));
    dispatch(getJobrentApi());
  }, []);

  const frm = useFormik<UserProfile>({
    initialValues: {
      email: userLogin?.email!,
      name: userLogin?.name!,
      id: userLogin?.id!,
      password: userLogin?.password!,
      phone: userLogin?.phone!,
      birthday: userLogin?.birthday!,
      gender: userLogin?.gender!,
      role: userLogin?.role!,
      skill: userLogin?.skill!,
      certification: userLogin?.certification!,
    },
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      name: yup.string().trim().required("Name cannot be blank!"),
      phone: yup
        .string()
        .trim()
        .required("Phone number cannot be blank!")
        .matches(
          /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/,
          "Phone number is not valid!"
        ),
      password: yup
        .string()
        .trim()
        .required("Password cannot be blank!")
        .min(6, "Password must be between 6 - 10 characters!")
        .max(10, "Password must be between 6 - 10 characters!"),
    }),
    onSubmit: (values: UserProfile) => {
      console.log("update:", values);
      dispatch(updateProfileApi(userLogin?.id!, values));
      dispatch(getProfileApi(userLogin?.id!));
    },
  });
  const renderJobRent = () => {
    if (arrJobRent.length > 0) {
      return arrJobRent.map((item) => {
        return (
          <div
            className="gigs_card mb-3 w-100"
            style={{ border: "1px solid #dedddc" }}
            key={item.congViec.id}
          >
            <div style={{ padding: 15 }}>
              <div className="row">
                <div className="gigs_card_img" style={{ width: "40%" }}>
                  <img
                    className="w-100"
                    src={item?.congViec.hinhAnh}
                    alt="..."
                  />
                </div>
                <div className="gigs_card_content" style={{ width: "60%" }}>
                  <h3>{item?.congViec.tenCongViec}</h3>
                  <p>{item?.congViec.moTaNgan}</p>
                  <div className="d-flex justify-content-between danhgia">
                    <div className="left">
                      <i
                        className="fas fa-star"
                        style={{ color: "#f8b653" }}
                      ></i>
                      <span className="saoCV" style={{ color: "#f8b653" }}>
                        {item?.congViec.saoCongViec}
                      </span>{" "}
                      <span className="danhGia">
                        ({item?.congViec.danhGia})
                      </span>
                    </div>
                    <div className="right">
                      <p className="giaTien">${item?.congViec.giaTien}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn_edit mt-3 d-flex justify-content-end">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(delJobrentApi(item?.id));
                  }}
                >
                  DEL
                </button>
              </div>
            </div>
          </div>
        );
      });
    }
    return (
      <>
        <p>Buying services for work?</p>
        <p>Help us tallor your exterlen ce to flt your needs.</p>
        <NavLink to="/">Tell us more about your business</NavLink>;
      </>
    );
  };
  return (
    <div>
      <HeaderNoSticky />
      <CategoriesMenuNoSticky />
      <div className="profile container">
        <div className=" row ">
          <div className="col-12 col-lg-4 mb-lg-0 mb-3">
            <div className="basic_profile">
              <img
                src="https://i.pravatar.cc"
                width={150}
                height={150}
                alt="..."
              />
              <h3>{userLogin?.email}</h3>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#detail_info_modal"
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>

              <hr />
              <div className="basic_profile_country">
                <div className="basic_profile_country_left basic_profile_left">
                  <i className="fa-solid fa-location-dot"></i> From
                </div>
                <div className="basic_profile_country_right basic_profile_right">
                  Vietnam
                </div>
              </div>
              <div className="basic_profile_member">
                <div className="basic_profile_member_left basic_profile_left">
                  <i className="fa-solid fa-user"></i> Member since
                </div>
                <div className="basic_profile_member_right basic_profile_right">
                  Jan 2023
                </div>
              </div>
            </div>
            <div className="info_detail">
              <div className="info_detail_description">
                <div className="basic_profile_left">Description</div>
                <div>
                  <span className="d-block mb-2">Name: {userLogin?.name}</span>
                  <span className="d-block mb-2">
                    Phone: {userLogin?.phone}
                  </span>
                  <span>Birthday: {userLogin?.birthday}</span>
                </div>
              </div>
              <div className="info_detail_languages">
                <div className="basic_profile_left">Languages</div>
                <div>English: Basic</div>
              </div>
              <div className="info_detail_accounts">
                <div className="basic_profile_left">Linked Accounts</div>
                <div></div>
              </div>
              <div className="info_detail_skills">
                <div className="basic_profile_left">Skills</div>
                <div>
                  {userLogin?.skill.map((item) => {
                    return (
                      <span className="d-block mb-2" key={item}>
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="info_detail_education">
                <div className="basic_profile_left">Education</div>
                <div>CYBERSOFT</div>
              </div>
              <div className="info_detail_certification">
                <div className="basic_profile_left">Certification</div>
                <div>
                  {userLogin?.certification.map((item) => {
                    return (
                      <span className="d-block mb-2" key={item}>
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="content_profile">{renderJobRent()}</div>
          </div>
        </div>

        {/* MODAL */}
        <div className="detail_info_modal">
          <div
            className="modal fade"
            id="detail_info_modal"
            tabIndex={-1}
            // data-bs-backdrop="static"
            // data-bs-keyboard="false"
            role="dialog"
            aria-labelledby="modalTitleId"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalTitleId">
                    User Information
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <form onSubmit={frm.handleSubmit}>
                  <div className="modal-body">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={frm.values.name}
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    {frm.touched.name && frm.errors.name && (
                      <p className="f-error" id="namelError">
                        {frm.errors.name}
                      </p>
                    )}
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      // aria-describedby="emailHelp"
                      name="email"
                      // disabled
                      value={frm.values.email}
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    {frm.touched.email && frm.errors.email && (
                      <p className="f-error" id="emailError">
                        {frm.errors.email}
                      </p>
                    )}
                    <label className="form-label">Password</label>
                    <input
                      type="text"
                      className="form-control"
                      id="password"
                      name="password"
                      value={frm.values.password}
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    {frm.touched.password && frm.errors.password && (
                      <p className="f-error" id="passwordError">
                        {frm.errors.password}
                      </p>
                    )}
                    <label className="form-label">Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={frm.values.phone}
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    {frm.touched.phone && frm.errors.phone && (
                      <p className="f-error" id="phoneError">
                        {frm.errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
