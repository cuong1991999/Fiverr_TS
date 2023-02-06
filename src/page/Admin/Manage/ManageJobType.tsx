import React from "react";
import Pagination from "../../../components/Pagination/Pagination";

type Props = {};

const ManageJobType = (props: Props) => {
  const showAdd = () => {
    const showadd = window.document.querySelector(".modeltabs-add");
    showadd?.classList.toggle("show");
  };
  const showEdit = () => {
    const showedit = window.document.querySelector(".modeltabs-edit");
    showedit?.classList.toggle("show");
  };
  const handleEdit = () => {};
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
        <tbody>
          <tr>
            <td>1</td>
            <td>Graphics & Design</td>
            <td className="action">
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleEdit();
                }}
              >
                Edit
              </button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <Pagination length={0} arr /> */}
      <div className="model-tabs modeltabs-add">
        <div className="overplay-admin" onClick={showAdd}></div>
        <div className="model-body">
          <h2>ADD NEW JOBTYPE</h2>
          <div className="model-form">
            <form action="">
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
            <form action="">
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
