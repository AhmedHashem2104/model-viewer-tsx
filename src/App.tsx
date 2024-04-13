import { useNavigate } from "react-router-dom";
import styles from "./App.module.css";
import Layer_1 from "./assets/Layer_1.png";
import Layer_2 from "./assets/Layer_2.png";
import video from "./assets/03.mp4";

const App = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.video}>
      <video src={video} autoPlay muted loop />
      <img src={Layer_1} className={styles.image} />
      <img src={Layer_2} className={styles.image} />

      <div className={styles.button} onClick={() => navigate("/video")}>
        متابعة
      </div>
      <div
        className={styles.button}
        onClick={() => {
          window.location.href =
            "https://ir.directfn.com/filecontent//96A3456C-4979-4DF0-AC6F-6872CA3C9458.pdf";
        }}
      >
        الإنتقال مباشرة للتقرير السنوي
      </div>
    </div>
  );
};

export default App;
