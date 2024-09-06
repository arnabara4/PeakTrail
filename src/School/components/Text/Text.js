import React from "react";
import styles from "../../styles/Text.module.css";
import image from "../../assets/Image1.png";
const Text = () => {
  return (
    <div className={styles.Comp1Wrapper}>
      <div className={styles.Txt1Wrapper}>
        <p className={styles.Txt1Para1}>
          At PeakTrail, we think school trips should be more than just a break
          from class- they should be exciting adventures that make students
          curious, help them work together, gain knowledge, have curriculum
          activities, and create lasting memories.{" "}
        </p>
        <p className={styles.Txt1Para2}>
          Our school trips are carefully planned to mix learning with fun and
          exploration, all while being
          <p className={`${styles.laal} ${styles.Txt1Para3}`}>
            budget-friendly!
          </p>
        </p>
      </div>
      <img
        src={image}
        alt="pic"
      />
    </div>
  );
};

export default Text;
