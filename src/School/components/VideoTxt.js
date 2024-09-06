import React from "react";
import styles from "../styles/Text.module.css";

const VideoTxt = () => {
  return (
    <div className={styles.VideoTxtWrapper}>
      <h1 className={styles.VThead}>Simple Planning,</h1>
      <div className={styles.VidTxt}>
        <div>Maximum</div>
        <span className={styles.vibe}>impact</span>
      </div>
    </div>
  );
};

export default VideoTxt;
