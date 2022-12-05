import SideBar from "../../components/sidebar";
import Home from "../../components/home";
import About from "../../components/about";
import Album from "../../components/album";
import Skills from "../../components/skills";
import Experience from "../../components/experience";
import Contact from "../../components/contact";

import "./style/style.css";
import { useState } from "react";
import React from "react";

const rotateStyle = {
  transform: "rotateX(90deg)",
  height: 0,
};

export default function HomePage({ curPage }) {
  const [page, setPage] = useState(curPage);
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <React.Fragment>
      <div className="mobile">
        <div
          className="navbar"
          style={
            showNavbar
              ? { transform: "translateY(-110%)" }
              : { transform: "translateY(0)" }
          }
        >
          <i
            className="fa-solid fa-bars"
            onClick={() => setShowNavbar(!showNavbar)}
          ></i>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div
              className="sidebar"
              style={
                showNavbar
                  ? { transform: "translateX(0)" }
                  : { transform: "translateX(-100%)" }
              }
            >
              <SideBar
                close={setShowNavbar}
                handlePage={page}
                handleChangePage={setPage}
              />
            </div>
            <div className="col-12">
              <Home
                handlePage={page}
                handleChangePage={setPage}
                className="page"
                style={page !== 1 ? rotateStyle : {}}
              />
              <About className="page" style={page !== 2 ? rotateStyle : {}} />
              <Album
                handlePage={page}
                className="page"
                style={page !== 3 ? rotateStyle : {}}
              />
              <Skills
                handlePage={page}
                className="page"
                style={page !== 4 ? rotateStyle : {}}
              />
              <Experience
                className="page"
                style={page !== 5 ? rotateStyle : {}}
              />
              <Contact className="page" style={page !== 6 ? rotateStyle : {}} />
            </div>
          </div>
        </div>
      </div>
      <div className="desktop">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <SideBar handlePage={page} handleChangePage={setPage} />
            </div>
            <div className="col-9">
              <Home
                handlePage={page}
                handleChangePage={setPage}
                className="page"
                style={page !== 1 ? rotateStyle : {}}
              />
              <About className="page" style={page !== 2 ? rotateStyle : {}} />
              <Album
                handlePage={page}
                className="page"
                style={page !== 3 ? rotateStyle : {}}
              />
              <Skills
                handlePage={page}
                className="page"
                style={page !== 4 ? rotateStyle : {}}
              />
              <Experience
                className="page"
                style={page !== 5 ? rotateStyle : {}}
              />
              <Contact className="page" style={page !== 6 ? rotateStyle : {}} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
