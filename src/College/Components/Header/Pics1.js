import React from "react";
import styles from "../../styles/Header.module.css";
import pic11 from "../../assets/image 10.png";
import pic12 from "../../assets/image 11.png";
import rec from "../../assets/Rectangle 1885.png"
const Pics1 = () => {
  return (
    <div className={styles.Pics1Wrapper}>
      <img
        className={styles.rec}
        src={rec}
        alt="pic"
      />
      <img
        className={styles.pic11}
        src={pic11}
        alt="pic"
      />
      <img
        className={styles.pic12}
        src={pic12}
        alt="pic"
      />
    </div>
  );
};

export default Pics1;
