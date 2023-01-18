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

  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<number>(8);
  const [pageNumberLimit, setpageNumberLimit] = useState<number>(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState<number>(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState<number>(0);
  const lastPostIndex = page * posts;
  const firstPostIndex = lastPostIndex - posts;
  const currentPosts = arr.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    dispacth(PaginationAction(currentPosts));
  }, [page]);

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

  const nextPage = () => {
    setPage((prev) => prev + 1);
    if (page + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const prevPage = () => {
    setPage((prev) => prev - 1);
    if ((page - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div className="pagination">
      <button className="btn" onClick={prevPage} disabled={page <= 1}>
        <i className="fas fa-arrow-left"></i>
      </button>
      {renderNumberButton}
      <button
        className="btn"
        onClick={nextPage}
        disabled={page >= Math.ceil(length / posts)}
      >
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
