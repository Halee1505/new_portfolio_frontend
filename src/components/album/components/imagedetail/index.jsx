import "./style.css";
import { useState } from "react";
export default function ImageDetail({ images, img, closeHandler }) {
  const [image, setImage] = useState(img);

  const gotoPrev = () => {
    const index = images.path.indexOf(image);
    if (index === 0) {
      setImage(images.path[images.path.length - 1]);
    } else {
      setImage(images.path[index - 1]);
    }
  };
  const gotoNext = () => {
    const index = images.path.indexOf(image);
    if (index === images.path.length - 1) {
      setImage(images.path[0]);
    } else {
      setImage(images.path[index + 1]);
    }
  };

  return (
    <div className="image__detail--overlay">
      <i
        onClick={() => {
          closeHandler(false);
        }}
        className="fas fa-times exit"
      ></i>
      <i className="fa-solid fa-angle-left move" onClick={gotoPrev}></i>
      <img src={image} className="image-detail" alt="img" />
      <i className="fa-solid fa-angle-right move" onClick={gotoNext}></i>
    </div>
  );
}
