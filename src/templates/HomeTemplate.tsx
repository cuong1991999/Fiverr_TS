import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const HomeTemplate = (props: Props) => {
  return <Outlet />;
};

export default HomeTemplate;
