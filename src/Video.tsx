import { useEffect } from "react";
import styles from "./App.module.css";
import video from "./assets/02.mp4";
import { useNavigate } from "react-router-dom";
const Video = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/3d-model");
    }, 3900);
  }, []);
  return (
    <div className={styles.img}>
      <video
        src={video}
        style={{
          width: `100%` /* Video width stretches to fill parent */,
          height: `100%`,
          objectFit: `cover` /* Maintain aspect ratio and cover container */,
        }}
        autoPlay={true}
        loop
        muted
      />
    </div>
  );
};

export default Video;
