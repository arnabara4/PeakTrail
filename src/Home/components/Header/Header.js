import React from "react";
import VideoTxt from "../VideoTxt/VideoTxt";
import video from "../../assets/Video.mp4";
import styles from "../../styles/Header.module.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className={styles.HeaderWrapper}>
      <video
        src={video}
        autoPlay
        muted
        loop
      />
      <div className={styles.overlay}>
        <Navbar/>
        <VideoTxt />
      </div>
    </div>
  );
};

export default Header;
