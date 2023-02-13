import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/scss/style.scss";
import {
  Navigate,
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import HomeTemplate from "./templates/HomeTemplate";
import Home from "./page/Home/Home";
import JobSearch from "./page/JobSearch/JobSearch";
import JobTypes from "./page/JobType/JobTypes";
import JobCategories from "./page/JobSearch/JobCategories";
import JobDetail from "./page/JobDetail/JobDetail";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import AdminTemplate from "./templates/AdminTemplate";
import ManageJobType from "./page/Admin/Manage/ManageJobType";
<<<<<<< HEAD
import Profile from "./page/Profile/Profile";
import ManageService from "./page/Admin/Manage/ManageService";
=======
import ManageService from "./page/Admin/Manage/ManageService";
import Profile from "./page/Profile/Profile";
import Comment from "./page/Admin/Comment/Comment";

>>>>>>> efdbc7cd43a8a66d52494faf79313a60d6504aba
export const history: any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/search/:id" element={<JobSearch />}></Route>
          <Route path="/categories/:id" element={<JobCategories />}></Route>
          <Route path="/jobtype/:id" element={<JobTypes />}></Route>
          <Route path="/jobdetail/:id" element={<JobDetail />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
        <Route element={<AdminTemplate />}>
          <Route
            path="/admin/managejobtype"
            element={<ManageJobType />}
          ></Route>
          <Route
            path="/admin/manageservice"
            element={<ManageService />}
          ></Route>
          <Route path="/admin/managecomment" element={<Comment />}></Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
