import React from "react";
import Navbar from "../Navbar/Navbar";
import VideoTxt from "../VideoTxt/VideoTxt";
import video from "../../assets/Video.mov";
import styles from "../../styles/Header.module.css";
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
        <Navbar />
        <VideoTxt />
      </div>
    </div>
  );
};

export default Header;
