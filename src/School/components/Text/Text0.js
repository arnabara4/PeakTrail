import React from "react";
import styles from "../../styles/Text.module.css";
import img from "../../assets/Image1.png"

const Text0 = () => {
  return (
    <div className={styles.txt0Wrapper}>
      <div className={styles.txt0}>
        <p className={styles.grey}>
          At PeakTrail, we think school trips should be more than just a break
          from class- they should be exciting adventures that make students
          curious, help them work together, gain knowledge, have curriculum
          activities, and create lasting memories.
        </p>
        <p className={styles.black}>
          Our school trips are carefully planned to mix learning with fun and
          exploration, all while being <em className={styles.laal2}>budget-friendly!</em>
        </p>
      </div>
      <img src={img} alt="pic"/>
    </div>
  );
};

export default Text0;
