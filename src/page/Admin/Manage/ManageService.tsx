import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../components/Pagination/Pagination";
import { DispatchType, RootState } from "../../../redux/configStore";
import {
  addAdminServiceApi,
  deleteAdminServiceApi,
  getAdminJobServiceApi,
  putAdminJobServiceApi,
} from "../../../redux/reducer/AdminReducer";
import * as Yup from "yup";
type Props = {};
type JobService = {
  id: number;
  maCongViec: number;
  maNguoiThue: number;
  ngayThue: string;
  hoanThanh: boolean;
};
const ManageService = (props: Props) => {
  const getApiService = () => {
    dispatch(getAdminJobServiceApi());
  };

  useEffect(() => {
    getApiService();
  }, []);
  // truyen prop cho components paginaton
  const { AdminJobService } = useSelector(
    (state: RootState) => state.AdminReducer
  );
  // dung render cho table
  const { arrPagination } = useSelector(
    (state: RootState) => state.JobManagementReducer
  );
  const dispatch: DispatchType = useDispatch();
  // handle radio
  const handleChange = (e: any) => {
    if (e.target.value === "true") {
      setComplete(true);
      setCheck(e.target.value);
      setChecked2(e.target.value);
    }
    if (e.target.value === "false") {
      setComplete(false);
      setCheck(e.target.value);
      setChecked2(e.target.value);
    }
  };

  // handle edit va cach lenh open/close model
  const handleEdit = (item: JobService) => {
    setItem(item);
    if (item.hoanThanh) {
      setChecked2("true");
    } else {
      setChecked2("false");
    }
    showEdit();
  };
  const [checked2, setChecked2] = useState("");
  const [item, setItem] = useState<any>(null);
  const [checked, setCheck] = useState("");
  const [complete, setComplete] = useState(false);

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

  // render
  const renderTable = () => {
    return arrPagination.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.maCongViec}</td>
          <td>{item.maNguoiThue}</td>
          <td>{item.ngayThue}</td>
          <td>{item.hoanThanh === true ? "Complete" : "Incomplete"}</td>
          <td className="action">
            <button
              className="btn btn-primary"
              onClick={() => handleEdit(item)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteAdminServiceApi(item.id))}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  //model Edit
  const frme = useFormik<JobService>({
    initialValues: {
      id: item?.id,
      maCongViec: item?.maCongViec,
      maNguoiThue: item?.maNguoiThue,
      ngayThue: "",
      hoanThanh: complete,
    },
    validationSchema: Yup.object().shape({
      maCongViec: Yup.string().trim().required(" Job ID cannot be blank"),
      maNguoiThue: Yup.string().trim().required("Hirer ID cannot be blank"),
      ngayThue: Yup.string().trim().required("Hire Day cannot be blank"),
    }),
    onSubmit: (value) => {
      const payload = {
        id: item?.id,
        maCongViec: value.maCongViec,
        maNguoiThue: value.maNguoiThue,
        ngayThue: value.ngayThue,
        hoanThanh: complete,
      };
      dispatch(putAdminJobServiceApi(payload));
      setItem(null);
      closeEdit();
    },
  });
  // model add
  const frma = useFormik<JobService>({
    initialValues: {
      id: 0,
      maCongViec: 0,
      maNguoiThue: 0,
      ngayThue: "",
      hoanThanh: complete,
    },
    validationSchema: Yup.object().shape({
      id: Yup.string().trim().required("ID cannot be blank"),
      maCongViec: Yup.string().trim().required("Job ID cannot be blank"),
      maNguoiThue: Yup.string().trim().required("Hire ID cannot be blank"),
      ngayThue: Yup.string().trim().required("Hire Day cannot be blank"),
    }),
    onSubmit: (value) => {
      const payload = {
        id: value.id,
        maCongViec: value.maCongViec,
        maNguoiThue: value.maNguoiThue,
        ngayThue: value.ngayThue,
        hoanThanh: complete,
      };
      dispatch(addAdminServiceApi(payload));
      closeAdd();
    },
  });
  return (
    <section className="managejt">
      <div className="btn-add">
        <button onClick={showAdd}>ADD SERVICE</button>
      </div>
      <table className="table-admin">
        <thead>
          <tr>
            <th>ID</th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>Job ID</th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>
              Hirer ID{" "}
            </th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>
              Hire Day
            </th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>
              Condition
            </th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>Action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
      <Pagination length={AdminJobService.length} arr={AdminJobService} />

      <div className="model-tabs modeltabs-add">
        <div className="overplay-admin" onClick={showAdd}></div>
        <div className="model-body">
          <h2>ADD NEW JOBTYPE</h2>
          <div className="model-form">
            <form action="" onSubmit={frma.handleSubmit}>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  ID
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ID"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  name="id"
                  onBlur={frma.handleChange}
                  onChange={frma.handleChange}
                />
              </div>
              {frma.touched.id && frma.errors.id && (
                <p className="text-danger my-1">{frma.errors.id}</p>
              )}
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Job ID
                </span>
                <input
                  name="maCongViec"
                  type="text"
                  className="form-control"
                  placeholder="Job ID"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  onBlur={frma.handleChange}
                  onChange={frma.handleChange}
                />
              </div>
              {frma.touched.maCongViec && frma.errors.maCongViec && (
                <p className="text-danger my-1">{frma.errors.maCongViec}</p>
              )}
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Hirer ID
                </span>
                <input
                  name="maNguoiThue"
                  type="text"
                  className="form-control"
                  placeholder="Hirer ID"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  onBlur={frma.handleChange}
                  onChange={frma.handleChange}
                />
              </div>
              {frma.touched.maNguoiThue && frma.errors.maNguoiThue && (
                <p className="text-danger my-1">{frma.errors.maNguoiThue}</p>
              )}
              <div className="input-group flex-wrap">
                <span className="input-group-text" id="addon-wrapping">
                  Hire Day
                </span>
                <input
                  name="ngayThue"
                  type="date"
                  className="form-control"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  onBlur={frma.handleChange}
                  onChange={frma.handleChange}
                />
              </div>
              {frma.touched.ngayThue && frma.errors.ngayThue && (
                <p className="text-danger my-1">{frma.errors.ngayThue}</p>
              )}
              <p className="my-3">Condition</p>
              <div className="d-flex align-items-center gap-2">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="hoanThanh"
                    value="true"
                    id="hoanThanh1"
                    checked={checked === "true"}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label className="form-check-label" htmlFor="hoanThanh1">
                    Complete
                  </label>
                </div>
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="hoanThanh"
                    value="false"
                    id="hoanThanh2"
                    checked={checked === "false"}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label className="form-check-label" htmlFor="hoanThanh2">
                    Incomplete
                  </label>
                </div>
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
          <h2>UPDATE SERVICE</h2>
          <div className="model-form">
            <form action="" onSubmit={frme.handleSubmit}>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  ID
                </span>
                <input
                  type="text"
                  disabled
                  value={item?.id}
                  onChange={frme.handleChange}
                  onBlur={frme.handleChange}
                  className="form-control"
                  placeholder="ID"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Job ID
                </span>
                <input
                  type="text"
                  defaultValue={item?.maCongViec}
                  onChange={frme.handleChange}
                  onBlur={frme.handleChange}
                  className="form-control"
                  placeholder="Job Type"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frme.touched.maCongViec && frme.errors.maCongViec && (
                <p className="text-danger my-1">{frme.errors.maCongViec}</p>
              )}
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  Hirer ID
                </span>
                <input
                  defaultValue={item?.maNguoiThue}
                  onBlur={frme.handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Job Type"
                  onChange={frme.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frme.touched.maNguoiThue && frme.errors.maNguoiThue && (
                <p className="text-danger my-1">{frme.errors.maNguoiThue}</p>
              )}
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Hire Day
                </span>
                <input
                  type="date"
                  name="ngayThue"
                  className="form-control"
                  onChange={frme.handleChange}
                  onBlur={frme.handleChange}
                  placeholder="Job Type"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frme.touched.ngayThue && frme.errors.ngayThue && (
                <p className="text-danger my-1">{frme.errors.ngayThue}</p>
              )}
              <p className="my-3">Condition</p>
              <div className="d-flex align-items-center gap-2">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="hoanThanh"
                    value="true"
                    id="hoanThanh3"
                    checked={checked2 === "true"}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label className="form-check-label" htmlFor="hoanThanh3">
                    Complete
                  </label>
                </div>
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="hoanThanh"
                    value="false"
                    id="hoanThanh4"
                    checked={checked2 === "false"}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label className="form-check-label" htmlFor="hoanThanh4">
                    Incomplete
                  </label>
                </div>
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

export default ManageService;
