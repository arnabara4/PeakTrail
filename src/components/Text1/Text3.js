import React from "react";
import styles from "../../styles/Text.module.css";

const Text3 = () => {
  return (
    <div className={styles.Text3Wrapper}>
      <div>
        <span>The top</span>
        <span className={styles.laal}>destination</span>
      </div>
      <p>You can cancel anytime with a small percentage of the fee</p>
    </div>
  );
};

export default Text3;
