import React from "react";
import styles from "../styles/Misc.module.css";
import image from "../assets/Img.png";
import hk from "../assets/Honk Kong.png";

const Misc = () => {
  return (
    <div className={styles.imgPic}>
      <div>
        {" "}
        <img
          className={styles.bgpic}
          src={image}
          alt="pic"
        />
        <img
          className={styles.hk}
          src={hk}
          alt="pic"
        />
      </div>
      <div>
        {" "}
        <img
          className={styles.bgpic}
          src={image}
          alt="pic"
        />
        <img
          className={styles.hk}
          src={hk}
          alt="pic"
        />
      </div>
    </div>
  );
};

export default Misc;
