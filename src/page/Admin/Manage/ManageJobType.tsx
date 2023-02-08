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
type Props = {};
export type JobTypeAdminAdd = {
  id: number;
  tenLoaiCongViec: string;
};
const ManageJobType = (props: Props) => {
  const { AdminJobType } = useSelector(
    (state: RootState) => state.AdminReducer
  );
  const { arrPagination } = useSelector(
    (state: RootState) => state.JobManagementReducer
  );
  const getAdminJobType = () => {
    dispatch(getAdminJobTypeApi());
  };

  useEffect(() => {
    getAdminJobType();
  }, []);
  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const dispatch: DispatchType = useDispatch();
  const frme = useFormik({
    initialValues: {
      id: id,
      tenLoaiCongViec: name,
    },
    onSubmit: (value) => {
      const payload = {
        id: id,
        tenLoaiCongViec: value.tenLoaiCongViec,
      };
      console.log(value);
      dispatch(putAdminJobTypeApi(payload));
    },
  });
  const frm = useFormik<JobTypeAdminAdd>({
    initialValues: {
      id: 0,
      tenLoaiCongViec: "",
    },
    onSubmit: (value: JobTypeAdminAdd) => {
      dispatch(addAdminJobTypeApi(value));
    },
  });
  const showAdd = () => {
    const showadd = window.document.querySelector(".modeltabs-add");
    showadd?.classList.toggle("show");
  };
  const showEdit = () => {
    const showedit = window.document.querySelector(".modeltabs-edit");
    showedit?.classList.toggle("show");
  };
  const handleEdit = (id: number, name: string) => {
    showEdit();
    setID(id);
    setName(name);
  };
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
                  handleEdit(item.id, item.tenLoaiCongViec);
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
    return AdminJobType.slice(0, 8).map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.tenLoaiCongViec}</td>
          <td className="action">
            <button
              className="btn btn-primary"
              onClick={() => {
                handleEdit(item.id, item.tenLoaiCongViec);
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
                  value={id}
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
                  defaultValue={name}
                  onChange={frme.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
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

export default ManageJobType;
