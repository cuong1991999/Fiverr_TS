import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../components/Pagination/Pagination";
import { DispatchType, RootState } from "../../../redux/configStore";
import {
  addAdminJobTypeApi,
  getAdminJobTypeApi,
  deleteAdminJobTypeApi,
  putAdminJobTypeApi,
} from "../../../redux/reducer/AdminReducer";
import * as Yup from "yup";

type Props = {};
export type JobTypeAdminAdd = {
  id: number;
  tenLoaiCongViec: string;
};
const ManageJobType = (props: Props) => {
  // truyen prop cho components paginaton
  const { AdminJobType } = useSelector(
    (state: RootState) => state.AdminReducer
  );
  // dung render table
  const { arrPagination } = useSelector(
    (state: RootState) => state.JobManagementReducer
  );
  const getAdminJobType = () => { 
    dispatch(getAdminJobTypeApi());
  };
  
  useEffect(() => {
    getAdminJobType();
  }, []);
  // useState up value cho model edit

  const [item, setItem] = useState<any>(null);

  const dispatch: DispatchType = useDispatch();

  // model edit
  const frme = useFormik<JobTypeAdminAdd>({
    initialValues: {
      id: item?.id,
      tenLoaiCongViec: item?.tenLoaiCongViec,
    },
    validationSchema: Yup.object().shape({
      tenLoaiCongViec: Yup.string().trim().required("JobType cannot be blank"),
    }),
    onSubmit: (value) => {
      const payload = {
        id: item?.id,
        tenLoaiCongViec: value.tenLoaiCongViec,
      };
      console.log(payload);
      dispatch(putAdminJobTypeApi(payload));
      setItem(null);
      closeEdit();
    },
  });
  // model add
  const frm = useFormik<JobTypeAdminAdd>({
    initialValues: {
      id: 0,
      tenLoaiCongViec: "",
    },
    validationSchema: Yup.object().shape({
      id: Yup.string().trim().required("ID cannot be blank"),
      tenLoaiCongViec: Yup.string().trim().required("JobType cannot be blank"),
    }),
    onSubmit: (value: JobTypeAdminAdd) => {
      dispatch(addAdminJobTypeApi(value));
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
  const handleEdit = (item: JobTypeAdminAdd) => {
    showEdit();
    setItem(item);
  };
  //render
  const renderTable = () => {
    if (arrPagination.length > 0) {
      return arrPagination.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.tenLoaiCongViec}</td>
            <td className="action">
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleEdit(item);
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  dispatch(deleteAdminJobTypeApi(item.id));
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
        <button onClick={showAdd}>ADD NEW JOBTYPE</button>
      </div>
      <table className="table-admin">
        <thead>
          <tr>
            <th>ID</th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>
              Job Type
            </th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>Action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
      <Pagination length={AdminJobType.length} arr={AdminJobType} />
      <div className="model-tabs modeltabs-add">
        <div className="overplay-admin" onClick={showAdd}></div>
        <div className="model-body">
          <h2>ADD NEW JOBTYPE</h2>
          <div className="model-form">
            <form action="" onSubmit={frm.handleSubmit}>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-wrapping">
                  ID
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ID"
                  name="id"
                  onChange={frm.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frm.touched.id && frm.errors.id && (
                <p className="text-danger my-1">{frm.errors.id}</p>
              )}
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Job Type
                </span>
                <input
                  type="text"
                  name="tenLoaiCongViec"
                  className="form-control"
                  placeholder="Job Type"
                  onChange={frm.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frm.touched.tenLoaiCongViec && frm.errors.tenLoaiCongViec && (
                <p className="text-danger my-1">{frm.errors.tenLoaiCongViec}</p>
              )}
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
          <h2>UPDATE JOBTYPE</h2>
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
                  defaultValue={item?.id}
                  onChange={frme.handleChange}
                  disabled={true}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Job Type
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job Type"
                  name="tenLoaiCongViec"
                  defaultValue={item?.tenLoaiCongViec}
                  onChange={frme.handleChange}
                  onBlur={frme.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frme.touched.tenLoaiCongViec && frme.errors.tenLoaiCongViec && (
                <p className="text-danger my-1">
                  {frme.errors.tenLoaiCongViec}
                </p>
              )}
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

export default ManageJobType;
