import React from "react";
import globe from "../../assets/Globe.png";
import styles from "../../styles/Text.module.css";

const Test3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Text4Wrapper}>
        <b className={styles.Text4Title}>
          Pre-Trip <em>Consultation</em>
        </b>
        <p>
          At PeakTrail, we think school trips should be more than just a break
          from class- they should be exciting adventures that make students
          curious, help them work together, gain knowledge, have curriculum
          activities, and create lasting memories.
        </p>
      </div>
      <img
        src={globe}
        alt="pic"
      />
    </div>
  );
};

export default Test3;
