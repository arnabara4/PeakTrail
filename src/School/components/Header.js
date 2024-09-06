import React from "react";
import VideoTxt from "./VideoTxt";
import styles from "../styles/Header.module.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.overlay}>
        <Navbar/>
        <VideoTxt />
      </div>
    </div>
  );
};

export default Header;