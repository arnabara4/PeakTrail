import React from "react";
import styles from "../../styles/Text.module.css";
const VideoTxt = () => {
  return (
    <div className={styles.VideoTxtWrapper}>
      <h1 className={styles.VThead}>Get into the</h1>
      <div className={styles.VidTxt}>
        <span>Travel</span>
      </div>
      <span className={styles.vibe}>Vibe</span>
    </div>
  );
};

export default VideoTxt;
