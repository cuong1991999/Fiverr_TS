import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../components/Pagination/Pagination";
import { DispatchType, RootState } from "../../../redux/configStore";

import { useFormik } from "formik";
import {
  addAdminJobApi,
  deleteAdminJobApi,
  getAdminJobApi,
  putAdminJobApi,
} from "../../../redux/reducer/AdminReducer";
import * as Yup from "yup";
import { getStore, USER_ID } from "../../../util/config";

type Props = {};
type Job = {
  id: number;
  tenCongViec: string;
  danhGia: number;
  giaTien: number;
  nguoiTao: number;
  hinhAnh: string;
  moTa: string;
  maChiTietLoaiCongViec: number;
  moTaNgan: string;
  saoCongViec: number;
};
const ManageJob = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  const { arrPagination } = useSelector(
    (state: RootState) => state.JobManagementReducer
  );
  const { AdminJob } = useSelector((state: RootState) => state.AdminReducer);
  const [img, setImg] = useState<any>();
  const [edit, setEdit] = useState<any>(null);
  useEffect(() => {
    dispatch(getAdminJobApi());
  }, []);
  // model edit
  const frme = useFormik<Job>({
    initialValues: {
      id: edit?.id,
      tenCongViec: edit?.tenCongViec,
      danhGia: edit?.danhGia,
      giaTien: edit?.giaTien,
      nguoiTao: 0,
      hinhAnh: edit?.hinhAnh,
      moTa: edit?.moTa,
      maChiTietLoaiCongViec: edit?.maChiTietLoaiCongViec,
      moTaNgan: edit?.mota,
      saoCongViec: edit?.saoCongViec,
    },

    onSubmit: (values) => {
      const payload = {
        id: edit?.id,
        tenCongViec: values.tenCongViec,
        danhGia: values.danhGia,
        giaTien: values.giaTien,
        nguoiTao: Number(getStore(USER_ID)),
        hinhAnh: values.hinhAnh,
        moTa: values.moTa,
        maChiTietLoaiCongViec: values.maChiTietLoaiCongViec,
        moTaNgan: values.moTaNgan,
        saoCongViec: values.saoCongViec,
      };
      dispatch(putAdminJobApi(payload));
      setImg(null);
      setEdit(null);
      closeEdit();
    },
  });
  // model add
  const frm = useFormik<Job>({
    initialValues: {
      id: 0,
      tenCongViec: "",
      danhGia: 0,
      giaTien: 0,
      nguoiTao: 0,
      hinhAnh: "",
      moTa: "",
      maChiTietLoaiCongViec: 0,
      moTaNgan: "",
      saoCongViec: 0,
    },
    validationSchema: Yup.object().shape({
      tenCongViec: Yup.string().trim().required(" cannot be blank !"),
      moTa: Yup.string().trim().required(" cannot be blank !"),
      moTaNgan: Yup.string().trim().required(" cannot be blank !"),
      danhGia: Yup.string()
        .trim()
        .matches(/^[0-9]+$/, "  inValid !"),
      maChiTietLoaiCongViec: Yup.string().matches(/^[0-9]+$/, "  inValid !"),
      saoCongViec: Yup.string()
        .trim()
        .min(1)
        .required(" cannot be blank !")
        .matches(/^[0-9]+$/, "  inValid !"),
      giaTien: Yup.string()
        .trim()
        .matches(/^[0-9]+$/, "  inValid !"),
    }),
    onSubmit: (values) => {
      const payload = {
        id: values.id,
        tenCongViec: values.tenCongViec,
        danhGia: values.danhGia,
        giaTien: values.giaTien,
        nguoiTao: Number(getStore(USER_ID)),
        hinhAnh: img,
        moTa: values.moTa,
        maChiTietLoaiCongViec: values.maChiTietLoaiCongViec,
        moTaNgan: values.moTaNgan,
        saoCongViec: values.saoCongViec,
      };
      console.log(payload);
      setImg("");

      dispatch(addAdminJobApi(values));
      closeAdd();
    },
  });
  // handle edit va cach lenh open/close model

  const showAdd = () => {
    const showadd = window.document.querySelector(".modeltabs-add");
    showadd?.classList.toggle("show");
  };
  const showEdit = () => {
    const showedit = window.document.querySelector(".modeltabs-edit");
    showedit?.classList.toggle("show");
  };
  const closeAdd = () => {
    const close = window.document.querySelector(".modeltabs-add");
    close?.classList.remove("show");
  };
  const closeEdit = () => {
    const close = window.document.querySelector(".modeltabs-edit");
    close?.classList.remove("show");
  };
  const handleEdit = (item: Job) => {
    showEdit();
    setEdit(item);
  };
  const handleChangeImage = (e: any) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };
  const renderTable = () => {
    if (arrPagination.length > 0) {
      return arrPagination.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.tenCongViec}</td>
            <td>
              <img src={item.hinhAnh} alt="..." width={40} height={40} />
            </td>
            <td>
              {item.moTa}
              <hr />
              {item.moTaNgan}
            </td>
            <td>{item.giaTien}$</td>
            <td className="">
              {item.danhGia}
              <span className="d-block" style={{ marginTop: 5 }}>
                {item.saoCongViec}
                <i className="fas fa-star" style={{ color: "#f8b653" }}></i>
              </span>
            </td>

            <td className="action gap-1">
              <button
                className="btn btn-primary"
                onClick={() => handleEdit(item)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  dispatch(deleteAdminJobApi(item.id));
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    }
  };
  return (
    <section className="managejt">
      <div className="btn-add">
        <button onClick={showAdd}>ADD NEW JOB</button>
      </div>
      <table className="table-admin">
        <thead>
          <tr>
            <th>ID</th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>Name</th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>Image</th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>
              Description
            </th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>Price</th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>Rate</th>

            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>Action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
      <Pagination length={AdminJob.length} arr={AdminJob} />
      <div className="model-tabs modeltabs-add">
        <div className="overplay-admin" onClick={showAdd}></div>
        <div className="model-body">
          <h2>ADD NEW JOBTYPE</h2>
          <div className="model-form">
            <form action="" onSubmit={frm.handleSubmit}>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Name Job
                </span>
                <input
                  type="text"
                  name="tenCongViec"
                  className="form-control"
                  placeholder="Name Job"
                  onChange={frm.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frm.touched.tenCongViec && frm.errors.tenCongViec && (
                <p className="text-danger my-1">{frm.errors.tenCongViec}</p>
              )}
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Description
                </span>
                <input
                  type="text"
                  name="moTa"
                  className="form-control"
                  placeholder="Description"
                  onChange={frm.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frm.touched.moTa && frm.errors.moTa && (
                <p className="text-danger my-1">{frm.errors.moTa}</p>
              )}
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Short description
                </span>
                <input
                  type="text"
                  name="moTaNgan"
                  className="form-control"
                  placeholder="Short description"
                  onChange={frm.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frm.touched.moTaNgan && frm.errors.moTaNgan && (
                <p className="text-danger my-1">{frm.errors.moTaNgan}</p>
              )}
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Detail Id
                </span>
                <input
                  type="text"
                  name="maChiTietLoaiCongViec"
                  className="form-control"
                  placeholder="Detail Id"
                  onChange={frm.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frm.touched.maChiTietLoaiCongViec &&
                frm.errors.maChiTietLoaiCongViec && (
                  <p className="text-danger my-1">
                    {frm.errors.maChiTietLoaiCongViec}
                  </p>
                )}
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Price
                </span>
                <input
                  type="text"
                  name="giaTien"
                  className="form-control"
                  placeholder="Price"
                  onChange={frm.handleChange}
                  aria-label="Username"
                  onBlur={frm.handleBlur}
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frm.touched.giaTien && frm.errors.giaTien && (
                <p className="text-danger my-1">{frm.errors.giaTien}</p>
              )}
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Rate
                </span>
                <input
                  type="text"
                  name="danhGia"
                  className="form-control"
                  placeholder=" Rate"
                  onChange={frm.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frm.touched.danhGia && frm.errors.danhGia && (
                <p className="text-danger my-1">{frm.errors.danhGia}</p>
              )}
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Star
                </span>
                <input
                  type="text"
                  name="saoCongViec"
                  className="form-control"
                  placeholder=" Star"
                  onChange={frm.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frm.touched.saoCongViec && frm.errors.saoCongViec && (
                <p className="text-danger my-1">{frm.errors.saoCongViec}</p>
              )}
              <div>
                <label htmlFor="hinhAnh" className="hinhAnh">
                  UPLOAD IMAGE
                  <input
                    type="file"
                    id="hinhAnh"
                    hidden
                    onChange={handleChangeImage}
                  />
                </label>
                {img && (
                  <img
                    src={img}
                    alt="..."
                    className="ms-3"
                    width={50}
                    height={50}
                  />
                )}
              </div>
              <div className="model-action">
                <button className="btn btn-success" type="submit">
                  ADD
                </button>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={showAdd}
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="model-tabs modeltabs-edit">
        <div className="overplay-admin" onClick={showEdit}></div>
        <div className="model-body">
          <h2>UPDATE JOB</h2>
          <div className="model-form">
            <form action="" onSubmit={frme.handleSubmit}>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  ID
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ID"
                  name="id"
                  value={edit?.id}
                  disabled
                  onChange={frme.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Name Job
                </span>
                <input
                  type="text"
                  defaultValue={edit?.tenCongViec}
                  name="tenCongViec"
                  className="form-control"
                  placeholder="Name Job"
                  onChange={frme.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Description
                </span>
                <input
                  type="text"
                  name="moTa"
                  defaultValue={edit?.moTa}
                  className="form-control"
                  placeholder="Description"
                  onChange={frme.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Short description
                </span>
                <input
                  type="text"
                  name="moTaNgan"
                  defaultValue={edit?.moTaNgan}
                  className="form-control"
                  placeholder="Short description"
                  onChange={frme.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Detail Id
                </span>
                <input
                  type="text"
                  defaultValue={edit?.maChiTietLoaiCongViec}
                  name="maChiTietLoaiCongViec"
                  className="form-control"
                  placeholder="Detail Id"
                  onChange={frme.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Price
                </span>
                <input
                  type="text"
                  name="giaTien"
                  defaultValue={edit?.giaTien}
                  className="form-control"
                  placeholder="Price"
                  onChange={frme.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Rate
                </span>
                <input
                  type="text"
                  defaultValue={edit?.danhGia}
                  name="danhGia"
                  className="form-control"
                  placeholder=" Rate"
                  onChange={frme.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Star
                </span>
                <input
                  defaultValue={edit?.saoCongViec}
                  type="text"
                  name="saoCongViec"
                  className="form-control"
                  placeholder=" Number 1 -> 5"
                  onChange={frme.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div>
                <label htmlFor="hinhAnh" className="hinhAnh">
                  UPLOAD IMAGE
                  <input
                    type="file"
                    id="hinhAnh"
                    hidden
                    onChange={handleChangeImage}
                  />
                </label>
                {img && (
                  <img
                    src={img}
                    alt="..."
                    className="ms-3"
                    width={50}
                    height={50}
                  />
                )}
              </div>
              <div className="model-action">
                <button className="btn btn-success" type="submit">
                  SAVE
                </button>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={showEdit}
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageJob;
