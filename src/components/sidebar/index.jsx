import "./style/style.css";
import { useNavigate } from "react-router-dom";

export default function SideBar({ handlePage, handleChangePage, close }) {
  const navigate = useNavigate();
  return (
    <div className="SideBar bg-white border-end">
      <div className="row p-4">
        <div className="col-12 d-flex justify-content-end">
          <i
            className="fa-solid fa-xmark"
            onClick={() => {
              close(false);
            }}
          ></i>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <div
            className="SideBar_logo"
            style={{
              backgroundImage:
                "url(http://res.cloudinary.com/vitamim/image/upload/v1641982851/aootf0lsclxzlmedbvlo.jpg)",
            }}
          ></div>
        </div>
        <div className="col-12 d-flex flex-column align-items-center mt-2">
          <h2 className="SideBar__title">Nguyễn Hải Linh</h2>
          <h4 className="SideBar__title">(Halee)</h4>
        </div>
        <div className="col-12  mt-2">
          <strong className="SideBar__description  d-flex justify-content-center">
            FullStack Web developer /
          </strong>
        </div>
        <div className="col-12">
          <strong className="SideBar__description d-flex justify-content-center">
            Photographer
          </strong>
        </div>

        <div className="col-12 d-flex justify-content-center mt-4">
          <h5
            className={"SideBar__item " + (handlePage === 1 ? "active" : "")}
            onClick={() => {
              handleChangePage(1);
              navigate("/");
              close(false);
            }}
          >
            Home
          </h5>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <h5
            className={"SideBar__item " + (handlePage === 2 ? "active" : "")}
            onClick={() => {
              handleChangePage(2);
              navigate("/about");
              close(false);
            }}
          >
            About Me
          </h5>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <h5
            className={"SideBar__item " + (handlePage === 3 ? "active" : "")}
            onClick={() => {
              handleChangePage(3);
              navigate("/album");
              close(false);
            }}
          >
            Album
          </h5>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <h5
            className={"SideBar__item " + (handlePage === 4 ? "active" : "")}
            onClick={() => {
              handleChangePage(4);
              navigate("/skills");
              close(false);
            }}
          >
            Skills
          </h5>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <h5
            className={"SideBar__item " + (handlePage === 5 ? "active" : "")}
            onClick={() => {
              handleChangePage(5);
              navigate("/experience");
              close(false);
            }}
          >
            Experience
          </h5>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <h5
            className={"SideBar__item " + (handlePage === 6 ? "active" : "")}
            onClick={() => {
              handleChangePage(6);
              navigate("/contact");
              close(false);
            }}
          >
            Contact
          </h5>
        </div>
        <div className="col-12 d-flex justify-content-around mt-4 brand">
          <i
            className="fa-brands fa-facebook"
            onClick={() => {
              window.open("https://www.facebook.com/hailinh.nguyen.359126/");
            }}
          ></i>
          <i
            className="fa-brands fa-instagram"
            onClick={() => {
              window.open("https://www.instagram.com/halee_4u_/");
            }}
          ></i>{" "}
          <i
            className="fa-solid fa-envelope"
            onClick={() => {
              window.location.href = "mailto:linh.nguyen1505@hcmut.edu.vn";
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
