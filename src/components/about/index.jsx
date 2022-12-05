import "./style/style.css";
export default function About({ className, style }) {
  return (
    <div className={"about__overlay " + className} style={style}>
      <div className="about__title">
        <div className="row about-contact">
          <div className="col-md-12 d-flex flex-row align-items-center">
            <i className="fa-solid fa-address-card"></i>
            <h2 className="col-md-11 mb-0 mx-2">INFORMATION</h2>
          </div>
          <div className="col-md-12 d-flex flex-row align-items-center">
            <i className="icon fa-solid fa-calendar-days"></i>
            <p className="mb-0 mx-2">May 15,2001</p>
          </div>
          <div className="col-md-12 d-flex flex-row align-items-center">
            <i className="icon fa-solid fa-user"></i>{" "}
            <p className="mb-0 mx-2">Male</p>
          </div>
          <div className="col-md-12 d-flex flex-row align-items-center">
            <i className="icon fa-solid fa-phone"></i>{" "}
            <a href="tel:0395114189" className="mb-0 mx-2">
              0395114189
            </a>
          </div>
          <div className="col-md-12 d-flex flex-row align-items-center">
            <i className="icon fa-solid fa-envelope-open"></i>{" "}
            <a href="mailto:linh.nguyen.halee@gmail.com" className="mb-0 mx-2">
              linh.nguyen.halee@gmail.com
            </a>
          </div>
          <div className="col-md-12 d-flex flex-row align-items-center">
            <i className="icon fa-solid fa-location-dot"></i>{" "}
            <p className="mb-0 mx-2">Ho Chi Minh city</p>
          </div>
        </div>
        <div className="row  about-contact">
          <div className="col-md-12 d-flex flex-row align-items-center">
            <i className="fa-solid fa-graduation-cap"></i>
            <h2 className="mb-0 mx-2">EDUCATION</h2>
          </div>
          <h4 className="col-md-9">
            Ho Chi Minh City University of Technology (2019 - now){" "}
          </h4>
          <h5 className="col-md-12">Major: Computer science</h5>
        </div>
      </div>
    </div>
  );
}
