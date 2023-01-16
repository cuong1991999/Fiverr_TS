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
export const history: any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/search" element={<JobSearch />}></Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
