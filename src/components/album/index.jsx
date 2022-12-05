import "./style/style.css";
import { useLocation } from "react-router-dom";
import AlbumTitle from "./components/albumtitle";
import Images from "./components/images";

export default function Title({ handlePage, className, style }) {
  const location = useLocation();
  const album_id = location.pathname.split("/")[2];
  if (album_id) {
    return (
      <Images handlePage={handlePage} className={className} style={style} />
    );
  }
  return (
    <AlbumTitle handlePage={handlePage} className={className} style={style} />
  );
}
