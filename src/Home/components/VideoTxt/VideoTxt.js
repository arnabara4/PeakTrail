import React from "react";
import styles from "../../styles/Text.module.css";
import Vthead from "../../assets/Get into the.png"

const VideoTxt = () => {
  return (
    <div className={styles.VideoTxtWrapper}>
      <h1 className={styles.VThead}><img src={Vthead} alt="pic"/></h1>
      <div className={styles.VidTxt}>
        <div>Travel</div>
      </div>
      <span className={styles.vibe}>Vibe</span>
    </div>
  );
};

export default VideoTxt;
