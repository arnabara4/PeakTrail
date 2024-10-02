import React from "react";
import styles from "../../styles/Text.module.css"

const Text4 = () => {
  return (
    <div className={styles.Txt4Wrapper}>
      <div className={styles.Txt4Para1}>
        <p>
          We've got <em>you covered</em>
        </p>
      </div>
      <p className={styles.Txt4Para2}>
        At PeakTrail, we think school trips should be more than just a break
        from class- they should be exciting adventures that make students
        curious, help them work together, gain knowledge, have curriculum
        activities, and create lasting memories.
      </p>
    </div>
  );
};

export default Text4;
