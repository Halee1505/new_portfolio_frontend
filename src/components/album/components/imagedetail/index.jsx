import "./style.css";
export default function ImageDetail({ image, closeHandler }) {
  return (
    <div className="image__detail--overlay">
      <i
        onClick={() => {
          closeHandler(false);
        }}
        className="fas fa-times exit"
      ></i>
      <img src={image} className="image-detail" alt="img" />
    </div>
  );
}
