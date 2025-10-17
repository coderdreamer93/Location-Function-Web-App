import { React, useState, useEffect } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import "./style.css";

export const DashboardLayout = (props) => {
  const [sideBarClass, setsideBarClass] = useState("");
  const [bodyClass, setbodyClass] = useState("");
  useEffect(() => {
    if (window.innerWidth <= 991) {
      setsideBarClass("collapsed");
      setbodyClass("expanded");
    } else {
      setsideBarClass("");
      setbodyClass("");
    }
    function handleResize() {
      if (window.innerWidth <= 991) {
        setsideBarClass("collapsed");
        setbodyClass("expanded");
      } else {
        setsideBarClass("");
        setbodyClass("");
      }
    }
    window.addEventListener("resize", handleResize);
  }, []);
  function sidebarToggle() {
    if (sideBarClass === "") {
      setsideBarClass("collapsed");
      setbodyClass("expanded");
    } else {
      setsideBarClass("");
      setbodyClass("");
    }
  }
  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <Sidebar sideClass={sideBarClass} />
            <div className={`dashboardBody ${bodyClass}`}>
              {/* <Header sidebarToggle={sidebarToggle} /> */}
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
