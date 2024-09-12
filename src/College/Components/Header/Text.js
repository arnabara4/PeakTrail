import React from "react";
import styles from "../../styles/Header.module.css";

const Text = () => {
  return (
    <div className={styles.container}>
      <div className={styles.para1}>
        <p className={styles.txt1}>Professors Got You Bored?</p>
        <p className={styles.txt2}>pack your bags </p>
        <p className={styles.txt3}>and escape with us</p>
      </div>
      <div className={styles.para2}>
        <p>Explore the world without breaking the bank. Trips designed for you and your squad</p>
      </div>
      <button className={styles.btn}>Plan a trip</button>
    </div>
  );
};

export default Text;
