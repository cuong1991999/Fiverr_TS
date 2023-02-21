import { useSelector } from "react-redux";
import { RootState } from "../../../redux/configStore";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../../redux/configStore";
import React, { useEffect, useState } from "react";
import {
  getAdminUserApi,
  putAdminUserApi,
  deleteAdminUserApi,
  addAdminUserApi,
} from "../../../redux/reducer/AdminReducer";
import { useFormik } from "formik";

import * as Yup from "yup";
import Pagination from "../../../components/Pagination/Pagination";

type Props = {};
export type UserAdd = {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  birthday: string;
  role: string;
  certification: string[];
  gender: boolean;
  skill: string[];
};
const ManageUser = (props: Props) => {
  // truyen prop cho components paginaton
  const { AdminUser } = useSelector((state: RootState) => state.AdminReducer);
  // render table
  const { arrPagination } = useSelector(
    (state: RootState) => state.JobManagementReducer
  );
  const getAdminUser = () => dispatch(getAdminUserApi());
  useEffect(() => {
    getAdminUser();
  }, []);
  const [item, setItem] = useState<any>(null);

  const dispatch: DispatchType = useDispatch();

  //model edit
  const frme = useFormik<UserAdd>({
    enableReinitialize: true,
    initialValues: {
      id: item?.id,
      name: item?.name,
      email: item?.email,
      phone: item?.phone,
      password: item?.password,
      birthday: item?.birthday,
      role: item?.role,
      certification: item?.certification,
      gender: true,
      skill: item?.skill,
    },

    onSubmit: (value) => {
      const payload = {
        id: item?.id,
        name: value.name,
        email: item?.email,
        phone: value.phone,
        password: value.password,
        birthday: value.birthday,
        role: value.role,
        certification: item?.certification,
        gender: true,
        skill: item?.skill,
      };
      console.log(payload);
      dispatch(putAdminUserApi(payload));
      setItem(null);
      closeEdit();
    },
  });

  //model add
  const frm = useFormik<UserAdd>({
    initialValues: {
      id: 0,
      name: "",
      email: "",
      phone: "",
      password: "",
      birthday: "",
      role: "",
      certification: [],
      gender: true,
      skill: [],
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().trim().required("Cannot be blank"),
      email: Yup.string().trim().required("Cannot be blank"),
      phone: Yup.string().trim().required("Cannot be blank"),
      password: Yup.string().trim().required("Cannot be blank"),
      birthday: Yup.string().trim().required("Cannot be blank"),
      role: Yup.string().trim().required("Cannot be blank"),
    }),
    onSubmit: (value: UserAdd) => {
      console.log(value);

      dispatch(addAdminUserApi(value));
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
  const handleEdit = (item: UserAdd) => {
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
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
            <td>{item.certification}</td>
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
                  console.log(item.id);

                  dispatch(deleteAdminUserApi(item.id));
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
    <section className="manageU">
      <div className="btn-add">
        <button onClick={showAdd}>ADD NEW USER</button>
      </div>
      <table className="table-admin">
        <thead>
          <tr>
            <th>ID</th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.99)" }}>Name</th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.99)" }}>Email</th>
            <th
              style={{
                borderLeft: "1px solid rgba(0,0,0,.99)",
                width: "50px !importan",
              }}
            >
              Role
            </th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.99)" }}>
              Certification
            </th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.99)" }}>Action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
      <Pagination length={AdminUser.length} arr={AdminUser} />
      <div className="model-tabs modeltabs-add">
        <div className="overplay-admin" onClick={showAdd}></div>
        <div className="model-body">
          <h2>ADD NEW USER</h2>
          <div className="model-form">
            <form action="" onSubmit={frm.handleSubmit}>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="name"
                  onChange={frm.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frm.touched.name && frm.errors.name && (
                <p className="text-danger my-1">{frm.errors.name}</p>
              )}
              <div className="input-group flex-nowrap mt-3">
                <span className="input-group-text" id="addon-wrapping">
                  EMAIL
                </span>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="email"
                  onChange={frm.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frm.touched.name && frm.errors.name && (
                <p className="text-danger my-1">{frm.errors.email}</p>
              )}
              <div className="input-group flex-nowrap mt-3">
                <span className="input-group-text" id="addon-wrapping">
                  PHONE
                </span>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="phone"
                  onChange={frm.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frm.touched.name && frm.errors.name && (
                <p className="text-danger my-1">{frm.errors.phone}</p>
              )}

              <div className="input-group flex-nowrap mt-3">
                <span className="input-group-text" id="addon-wrapping">
                  PASSWORD
                </span>
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  onChange={frm.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              {frm.touched.name && frm.errors.name && (
                <p className="text-danger my-1">{frm.errors.password}</p>
              )}

              <div className="input-group flex-nowrap mt-3">
                <span className="input-group-text" id="addon-wrapping">
                  BIRTHDAY
                </span>
                <input
                  type="date"
                  name="birthday"
                  className="form-control"
                  placeholder="birthday"
                  onChange={frm.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
                {frm.touched.birthday && frm.errors.birthday && (
                  <p className="text-danger my-1">{frm.errors.birthday}</p>
                )}
              </div>

              <div className="input-group flex-nowrap mt-3">
                <span className="input-group-text" id="addon-wrapping">
                  ROLE
                </span>
                <input
                  type="text"
                  name="role"
                  className="form-control"
                  placeholder="role"
                  onChange={frm.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
                {frm.touched.role && frm.errors.role && (
                  <p className="text-danger my-1">{frm.errors.role}</p>
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
          <h2>UPDATE</h2>
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
                  defaultValue={frme.values.id}
                  onChange={frme.handleChange}
                  disabled={true}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Name
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                  name="name"
                  defaultValue={frme.values.name}
                  onChange={frme.handleChange}
                  onBlur={frme.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group flex-nowrap mt-2">
                <span className="input-group-text" id="addon-wrapping">
                  Email
                </span>
                <input
                  type="text"
                  disabled
                  className="form-control"
                  placeholder="email"
                  name="email"
                  defaultValue={frme.values.email}
                  onChange={frme.handleChange}
                  onBlur={frme.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group flex-nowrap mt-2">
                <span className="input-group-text" id="addon-wrapping">
                  Phone
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="phone"
                  name="phone"
                  defaultValue={frme.values.phone}
                  onChange={frme.handleChange}
                  onBlur={frme.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group flex-nowrap mt-2">
                <span className="input-group-text" id="addon-wrapping">
                  Birthday
                </span>
                <input
                  type="date"
                  className="form-control"
                  placeholder="birthday"
                  name="birthday"
                  defaultValue={frme.values.birthday}
                  onChange={frme.handleChange}
                  onBlur={frme.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group flex-nowrap mt-2">
                <span className="input-group-text" id="addon-wrapping">
                  Role
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="role"
                  name="role"
                  defaultValue={frme.values.role}
                  onChange={frme.handleChange}
                  onBlur={frme.handleChange}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div className="input-group flex-nowrap mt-2">
                <span className="input-group-text" id="addon-wrapping">
                  Gender
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Gender"
                  name="gender"
                  onChange={frme.handleChange}
                  onBlur={frme.handleChange}
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
      <div />
    </section>
  );
};

export default ManageUser;
