import "../../style/style.css";
// import "./style/style.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function AlbumTitle({ handlePage, className, style }) {
  const navigate = useNavigate();
  const [album, setAlbum] = useState([]);
  const [albumCount, setAlbumCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://new-portfolio-halee1505.vercel.app/album")
      .then((res) => {
        setAlbum(res.data);
      });
  }, []);

  useEffect(() => {
    if (album.length > albumCount && handlePage === 3) {
      setTimeout(() => {
        setAlbumCount(albumCount + 1);
      }, 100);
    }
    if (handlePage !== 3) {
      setAlbumCount(0);
    }
  }, [albumCount, handlePage, album]);

  return useMemo(
    () => (
      <div className={"album__overlay " + className} style={style}>
        {album.map((item, index) => {
          return (
            <div
              className="card justify-content-center"
              key={index}
              style={
                index <= albumCount
                  ? { opacity: 1, transform: "translateY(0px)" }
                  : { opacity: 0, transform: "translateY(200px)" }
              }
            >
              <div
                className="card__header"
                onClick={() => {
                  navigate("/album/" + item._id);
                }}
              >
                <div
                  style={{ backgroundImage: `url(${item.path[0]})` }}
                  className="album__image"
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    ),
    [handlePage, albumCount]
  );
}
