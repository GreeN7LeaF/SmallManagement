import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import SideBar from "./sidebar/SideBar";

const MainLayout = () => {
  const currUrl = window.location.href.split("/").slice(-1)[0];
  const [title, setTitle] = useState("");

  const initTitle = () => {
    switch (currUrl) {
      case "dashboard":
        setTitle("Trang chủ");
        break;
      default:
        setTitle("");
        break;
    }
  };

  useEffect(() => {
    initTitle();
  }, [title]);

  return (
    <>
      <SideBar />
      <div id="mainBody" className="container-fluid">
        <div className="nav">
          <div className="nav-left d-flex flex-row gap-3">
            <div className="open-sidenav pd-text">Menu</div>
            <div className="back pd-text">Trở về</div>
          </div>
          <div className="nav-right"></div>
        </div>
        <div className="sub-nav">
          <h3 className="ms-2 mt-3 text-uppercase title-1">{title}</h3>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
