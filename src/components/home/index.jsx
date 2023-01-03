import "./style/style.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({
  isMobile,
  handlePage,
  className,
  style,
  handleChangePage,
}) {
  const navigate = useNavigate();
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
    if (handlePage === 1) {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [handlePage]);

  return (
    <div
      className={"home__overlay " + className}
      style={
        !isMobile
          ? style
          : {
              ...style,
              backgroundPosition: "right",
            }
      }
    >
      <h2
        className="title__1"
        style={
          isHome
            ? { animation: "title__1 1s ease-out forwards" }
            : { transform: "translateX(0)", opacity: 1 }
        }
      >
        I am
      </h2>
      <h1
        className="title__2"
        style={
          isHome
            ? { animation: "title__2 1.5s ease-out forwards" }
            : { transform: "translateX(0)", opacity: 1 }
        }
      >
        a Fullstack Web Developer
      </h1>
      <h1
        className="title__3"
        style={
          isHome
            ? { animation: "title__3 2s ease-out forwards" }
            : { transform: "translateX(0)", opacity: 1 }
        }
      >
        <span>&</span> Photographer
      </h1>
      <button
        className="btn btn-outline-dark"
        style={
          isHome
            ? { animation: "btn 2s ease-out forwards" }
            : { transform: "translateY(150%) translateX(10vw)", opacity: 1 }
        }
        type="button"
        onClick={() => {
          handleChangePage(3);
          navigate("/album");
        }}
      >
        View Portfolio <i className="fa-solid fa-arrow-down"></i>
      </button>
    </div>
  );
}
