import "./style/style.css";
import { useState, useEffect } from "react";

export default function Skill({ handlePage, className, style }) {
  const [isSkills, setIsSkills] = useState(false);
  useEffect(() => {
    if (handlePage === 4) {
      setIsSkills(true);
    } else {
      setIsSkills(false);
    }
  }, [handlePage]);
  return (
    <div className={"skills__overlay py-4 " + className} style={style}>
      <div className="row">
        <div
          className="col-12"
          style={
            isSkills
              ? { animation: "specialty 1s ease-in-out" }
              : { opacity: 1, transform: "translateX(0)" }
          }
        >
          <p>MY SPECIALTY</p>
        </div>
        <div
          className="col-12 mt-2"
          style={
            isSkills
              ? { animation: "mySkills 1.3s ease-in-out" }
              : { opacity: 1, transform: "translateX(0)" }
          }
        >
          <h3>MY SKILLS</h3>
        </div>
        <div
          className="col-8 mt-4"
          style={
            isSkills
              ? { animation: "des 1.5s ease-in-out" }
              : { opacity: 1, transform: "translateX(0)" }
          }
        >
          <p>
            - Strengths: Front-end technology and Backend web application
            development
          </p>
          <p>- Proficiency in HTML, CSS, JavaScript</p>
          <p>- Familiarity with RESTful APIs</p>
          <p>
            - Familiarity in: JavaScript (ReactJS, Nodejs), MySQL,
            NoSQL(MongoDB), JSON, API
          </p>
        </div>
        <div className="col-12 mb-4">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div
                  className="col-10 mt-4"
                  style={
                    isSkills
                      ? { animation: "showHtml 1.1s ease-in-out" }
                      : { opacity: 1, transform: "translateX(0)" }
                  }
                >
                  <span>HTML</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      90%
                    </div>
                  </div>
                </div>
                <div
                  className="col-10 mt-4"
                  style={
                    isSkills
                      ? { animation: "showCss 1.2s ease-in-out" }
                      : { opacity: 1, transform: "translateX(0)" }
                  }
                >
                  <span>CSS</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      85%
                    </div>
                  </div>
                </div>
                <div
                  className="col-10 mt-4"
                  style={
                    isSkills
                      ? { animation: "showJs 1.3s ease-in-out" }
                      : { opacity: 1, transform: "translateX(0)" }
                  }
                >
                  <span>Javascript</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      80%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div
                  className="col-10 mt-4"
                  style={
                    isSkills
                      ? { animation: "showPhotoshop 1.4s ease-in-out" }
                      : { opacity: 1, transform: "translateX(0)" }
                  }
                >
                  <span>PhotoShop</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      80%
                    </div>
                  </div>
                </div>
                <div
                  className="col-10 mt-4"
                  style={
                    isSkills
                      ? { animation: "showReact 1.5s ease-in-out" }
                      : { opacity: 1, transform: "translateX(0)" }
                  }
                >
                  <span>ReactJs</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      85%
                    </div>
                  </div>
                </div>
                <div
                  className="col-10 mt-4"
                  style={
                    isSkills
                      ? { animation: "showNode 1.6s ease-in-out" }
                      : { opacity: 1, transform: "translateX(0)" }
                  }
                >
                  <span>NodeJs (ExpressJS)</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      70%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
