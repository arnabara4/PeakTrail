import React from "react";
import styles from "../../styles/Header.module.css";
import pic21 from "../../assets/image 9.png";
import pic22 from "../../assets/image 12.png";
import rect from "../../assets/Rectangle 1886.png";

const Pics2 = () => {
  return (
    <div className={styles.Pics2Wrapper}>
      <img
        className={styles.rect}
        src={rect}
        alt="pic"
      />
      <img
        className={styles.pic21}
        src={pic21}
        alt="pic"
      />
      <img
        className={styles.pic22}
        src={pic22}
        alt="pic"
      />
    </div>
  );
};

export default Pics2;
