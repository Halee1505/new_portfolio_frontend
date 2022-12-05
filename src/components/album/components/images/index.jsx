import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../style/imageStyle.css";
import React from "react";
import ImageDetail from "../imagedetail";

function random(length) {
  return Math.floor(Math.random() * (length - 1));
}

export default function Images() {
  const image_id = useLocation().pathname.split("/")[2];
  const [images, setImages] = useState({
    gallery: "",
    path: [],
  });
  const [image, setImage] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    axios
      .get("https://new-portfolio-halee1505.vercel.app/album/" + image_id)
      .then((res) => {
        setImages(res.data);
      });
  }, [image_id]);

  const row_1 =
    images.path.length % 4 !== 0
      ? Math.floor(images.path.length / 4) + 1
      : images.path.length / 4;
  const row_2 =
    (images.path.length - row_1) % 3 !== 0
      ? Math.floor((images.path.length - row_1) / 3) + 1
      : (images.path.length - row_1) / 3;
  const row_3 =
    (images.path.length - row_1 - row_2) % 2 !== 0
      ? Math.floor((images.path.length - row_1 - row_2) / 2) + 1
      : (images.path.length - row_1 - row_2) / 2;
  const row_4 = images.path.length - row_1 - row_2 - row_3;

  return (
    <div className="images_overlay">
      {open ? <ImageDetail image={image} closeHandler={setOpen} /> : ""}
      <div className="row">
        <div
          className="col-md-12"
          style={{
            height: "320px",
            backgroundImage: `url(${images.path[random(images.path.length)]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            color: "white",
            animation: "showTitle 2s ease-in-out",
          }}
        >
          <h1>{images.gallery.toUpperCase()}</h1>
        </div>
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-3 show_list_image">
            {images.path
              .filter((_, index) => index < row_1)
              .map((item, index) => {
                return (
                  <div className="images" key={index}>
                    <img
                      src={item}
                      alt="preview"
                      className="show_image show_1 mb-4"
                      onClick={() => {
                        setOpen(true);
                        setImage(item);
                      }}
                    />
                  </div>
                );
              })}
          </div>
          <div className="col-md-3 show_list_image">
            {images.path
              .filter((_, index) => index >= row_1 && index < row_1 + row_2)
              .map((item, index) => {
                return (
                  <div className="images" key={index}>
                    <img
                      src={item}
                      alt="preview"
                      className="show_image show_2 mb-4"
                      onClick={() => {
                        setOpen(true);
                        setImage(item);
                      }}
                    />
                  </div>
                );
              })}
          </div>
          <div className="col-md-3 show_list_image">
            {images.path
              .filter(
                (_, index) =>
                  index >= row_1 + row_2 && index < row_1 + row_2 + row_3
              )
              .map((item, index) => {
                return (
                  <div className="images" key={index}>
                    <img
                      src={item}
                      alt="preview"
                      className="show_image show_3 mb-4"
                      onClick={() => {
                        setOpen(true);
                        setImage(item);
                      }}
                    />
                  </div>
                );
              })}
          </div>
          <div className="col-md-3">
            {images.path
              .filter(
                (_, index) =>
                  index >= row_1 + row_2 + row_3 &&
                  index < row_1 + row_2 + row_3 + row_4
              )
              .map((item, index) => {
                return (
                  <div className="images" key={index}>
                    <img
                      src={item}
                      alt="preview"
                      className="show_image show_4 mb-4"
                      onClick={() => {
                        setOpen(true);
                        setImage(item);
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
