import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DispatchType, RootState } from "../../redux/configStore";
import { getJobMenuApi } from "../../redux/reducer/JobManagementReducer";

type Props = {};

const CategoriesMenu = (props: Props) => {
  // chi dung cho trang home khong dung cho cac trang khac
  const { arrMenu } = useSelector(
    (state: RootState) => state.JobManagementReducer
  );
  const dispatch: DispatchType = useDispatch();

  // render menu
  const renderMenu = () => {
    return arrMenu.slice(0, 8).map((item) => {
      return (
        <div className="categoriesmenu_item" key={item.id}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "category-link activedd" : "category-link"
            }
            to={`/jobtype/${item.id}`}
          >
            {item.tenLoaiCongViec}
          </NavLink>
          <div className="category__jobdetail">
            {item.dsNhomChiTietLoai.slice(0, 5).map((job) => {
              return (
                <div
                  className="container-fluid d-flex flex-column"
                  key={job.id}
                >
                  <p className="category__jobdetail_p">{job.tenNhom}</p>
                  {job.dsChiTietLoai.map((jobDetail) => {
                    return (
                      <NavLink
                        className="category__jobdetail_a"
                        to={`/categories/${jobDetail.id}`}
                        key={jobDetail.id}
                      >
                        {jobDetail.tenChiTiet}
                      </NavLink>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };
  //call api
  const getMenuApi = () => {
    dispatch(getJobMenuApi());
  };
  useEffect(() => {
    getMenuApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="category">
      <div className="category_wrapper">
        <div className="category_container container">
          <div className="category__menu">{renderMenu()}</div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesMenu;
