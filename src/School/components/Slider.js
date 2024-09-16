import React from "react";
import styles from "../styles/slider.module.css";

const Slider = () => {
  return (
    <div className={styles.SliderWrapper}>
      <div className={styles.slider}>
        <ul>
          <li className={styles.itemsec} style={{color:"#c73127"}}>STEM tours</li>
          <li>language tours</li>
          <li>Business tours</li>
          <li>music & arts tours</li>
        </ul>
      </div>
    </div>
  );
};

export default Slider;
