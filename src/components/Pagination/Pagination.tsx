import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../redux/configStore";
import { PaginationAction } from "../../redux/reducer/JobManagementReducer";
type Props = {
  length: number;
  arr: any;
};

const Pagination = (props: Props) => {
  const { length, arr } = props;

  const dispacth: DispatchType = useDispatch();
  // so trang
  const [page, setPage] = useState<number>(1);
  // so item
  const [posts, setPosts] = useState<number>(8);
  // so trang toi thieu hien thi
  const [pageNumberLimit, setpageNumberLimit] = useState<number>(5);
  //so trang lon nhat
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState<number>(5);
  // so trang nho nhat

  const [minPageNumberLimit, setminPageNumberLimit] = useState<number>(0);
  // vi tri cuoi
  const lastPostIndex = page * posts;
  // vi tri dau
  const firstPostIndex = lastPostIndex - posts;
  // trang hien tai
  const currentPosts = arr.slice(firstPostIndex, lastPostIndex);

  // dispatch thay doi theo so trang

  useEffect(() => {
    dispacth(PaginationAction(currentPosts));
  }, [arr]);
  useEffect(() => {
    dispacth(PaginationAction(currentPosts));
  }, [page]);
  // render nut button
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(length / posts); i++) {
    pages.push(i);
  }
  const renderNumberButton = pages.map((item) => {
    if (item < maxPageNumberLimit + 1 && item > minPageNumberLimit) {
      return (
        <button
          className={page === item ? "btn activeButton " : "btn"}
          key={item}
          onClick={() => {
            setPage(item);
          }}
        >
          {item}
        </button>
      );
    }
    return null;
  });

  // thiep lap nut next and prev
  const nextPage = () => {
    setPage((prev) => prev + 1);
    if (page + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const prevPage = () => {
    setPage((prev) => prev - 1);
    if ((page - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  let increaseBtn = null;
  let decreaseBtn = null;
  if (pages.length > maxPageNumberLimit) {
    increaseBtn = (
      <button
        className="btn"
        onClick={nextPage}
        disabled={page >= Math.ceil(length / posts)}
      >
        ...
      </button>
    );
  }
  if (pages.length > maxPageNumberLimit) {
    decreaseBtn = (
      <button className="btn" onClick={prevPage} disabled={page <= 1}>
        ...
      </button>
    );
  }
  return (
    <div className="pagination">
      <button className="btn" onClick={prevPage} disabled={page <= 1}>
        <i className="fas fa-arrow-left"></i>
      </button>
      {decreaseBtn}
      {renderNumberButton}
      {increaseBtn}
      <button
        className="btn"
        onClick={nextPage}
        disabled={page >= Math.ceil(length / posts)}
      >
        <i className="fas fa-arrow-right"></i>
      </button>
      <div className="ms-lg-3 text-center mt-3">
        <input
          type="text"
          value={page}
          onChange={(e) => {
            setPage(Number(e.target.value));
          }}
        />
        <span className="page">Page: {Math.ceil(length / posts)}</span>
      </div>
    </div>
  );
};

export default Pagination;
