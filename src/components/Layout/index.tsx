// import React from "react";
// import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* <Header /> */}
      <p>header</p>
      <Outlet />
    </div>
  );
}

export default Layout;
