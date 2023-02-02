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
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
