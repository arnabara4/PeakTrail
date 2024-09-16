import React from "react";
import styles from "../styles/Text.module.css";

const Text3 = () => {
  return (
    <div className={styles.Text3Wrapper}>
      <div className={styles.p}>
        <span>The top <em>destination</em></span>
      </div>
      <p>You can cancel anytime with a small percentage of the fee</p>
    </div>
  );
};

export default Text3;
