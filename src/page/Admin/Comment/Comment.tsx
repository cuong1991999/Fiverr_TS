import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../components/Pagination/Pagination";
import { DispatchType, RootState } from "../../../redux/configStore";
import {
  deleteCommentApi,
  getCommentAdminApi,
} from "../../../redux/reducer/AdminReducer";

type Props = {};

const Comment = (props: Props) => {
  const { AdminComment } = useSelector(
    (state: RootState) => state.AdminReducer
  );
  const { arrPagination } = useSelector(
    (state: RootState) => state.JobManagementReducer
  );
  const dispatch: DispatchType = useDispatch();
  const getCommentApi = () => {
    dispatch(getCommentAdminApi());
  };
  useEffect(() => {
    getCommentApi();
  }, []);

  const renderTable = () => {
    return arrPagination.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.maCongViec}</td>
          <td>{item.maNguoiBinhLuan}</td>
          <td>{item.ngayBinhLuan}</td>
          <td>{item.noiDung}</td>
          <td>
            {item.saoBinhLuan}
            <i
              className="fas fa-star"
              style={{ color: "#f8b653", marginLeft: 5 }}
            ></i>
          </td>
          <td className="action">
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(deleteCommentApi(item.id));
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
    <section>
      <table className="table-admin">
        <thead>
          <tr>
            <th>ID</th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>Job ID</th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>
              Comment ID
            </th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>
              Comment Date
            </th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>
              Description
            </th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>Rate</th>
            <th style={{ borderLeft: "1px solid rgba(0,0,0,.09)" }}>Action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
      <Pagination length={AdminComment.length} arr={AdminComment} />
    </section>
  );
};

export default Comment;
