import { useState, useEffect } from "react";
import Resizer from "react-image-file-resizer";
import "./style.css";
import axios from "axios";
const style = {
  height: "160px",
  width: "120px",
  border: "1px solid #c7c7c7",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "20px",
};

const Upload = ({ setShowUpload, showUpload }) => {
  const [file, setFile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gallery, setGallery] = useState("");
  useEffect(() => {
    setFile([]);
    setGallery("");
  }, [showUpload]);

  const Upload = (UploadImg) => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("file", UploadImg);
      formData.append("upload_preset", "vitamim");
      axios
        .post("https://api.cloudinary.com/v1_1/vitamim/image/upload", formData)
        .then((res) => {
          resolve(res.data.url);
        });
    });
  };

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        1800,
        1800,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "file"
      );
    });

  const handleUpload = () => {
    if (!gallery) return alert("Vui lòng nhập tên bộ sưu tập");
    if (file.length === 0) return alert("Vui lòng chọn ảnh");
    setLoading(true);
    Promise.all(file.map((item) => resizeFile(item)))
      .then((res) => {
        Promise.all(res.map((item) => Upload(item)))
          .then((res) => {
            axios
              .post("https://new-portfolio-halee1505.vercel.app/upload", {
                path: res,
                gallery: gallery,
              })
              .then(() => {
                alert("Upload thành công");
                setLoading(false);
                setShowUpload(false);
                window.location.href = "/";
              })
              .catch((err) => {
                console.log(err);
                alert("Upload thất bại");
                setLoading(false);
              });
          })
          .catch((err) => {
            console.log(err);
            alert("Upload thất bại");
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        alert("Upload thất bại");
        setLoading(false);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#0000003c",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          width: "70%",
          height: "70%",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {loading && (
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "#0000003c",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
            }}
          >
            <i className="fa-solid fa-spinner loading"></i>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "0px 20px",
          }}
        >
          <p>Tên album: </p>
          <input
            type="text"
            style={{
              height: "40px",
              borderRadius: "5px",
              border: "1px solid #c7c7c7",
              padding: "0 10px",
              marginLeft: "10px",
            }}
            accept="image/*"
            value={gallery}
            onChange={(e) => {
              setGallery(e.target.value);
            }}
          />
        </div>
        <div
          className="content"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "left",
            alignItems: "flex-start",
            padding: "20px",
            marginTop: "80px",
          }}
        >
          {" "}
          {file.map((item, index) => {
            return (
              <div
                key={item.name}
                style={{
                  ...style,
                  backgroundImage: `url(${URL.createObjectURL(item)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  cursor: "default",
                }}
              >
                <i
                  className="fa-solid fa-circle-xmark"
                  style={{
                    fontSize: "14px",
                    color: "#ffffff",
                    zIndex: 1000,
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setFile(file.filter((f, i) => f.name !== item.name));
                  }}
                ></i>
              </div>
            );
          })}
          <input
            type="file"
            id="upload"
            onChange={(e) => {
              setFile((file) => [...file, ...e.target.files]);
            }}
            multiple
            style={{
              display: "none",
            }}
          />
          <label htmlFor="upload" style={style}>
            <i
              className="fa-solid fa-upload"
              style={{ fontSize: "60px", color: "#c7c7c7" }}
            ></i>
          </label>
        </div>

        {/* upload button */}
        <div
          className="btn_overlay"
          style={{
            position: "absolute",
            right: "10px",
            bottom: "10px",
            width: "180px",
            height: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            style={{
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              color: "#000",
              cursor: "pointer",
              width: "80px",
              height: "30px",
              fontSize: "14px",
              fontWeight: "bold",
              textAlign: "center",
              boxShadow: "0 0 5px #0000003c",
            }}
            onClick={() => {
              setShowUpload(false);
            }}
          >
            Hủy
          </button>
          <button
            style={{
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              color: "#000",
              cursor: "pointer",
              width: "80px",
              height: "30px",
              fontSize: "14px",
              fontWeight: "bold",
              textAlign: "center",
              boxShadow: "0 0 5px #0000003c",
            }}
            onClick={handleUpload}
          >
            Đồng ý
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
