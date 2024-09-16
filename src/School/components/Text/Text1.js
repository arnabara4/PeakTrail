import React from "react";
import styles from "../../styles/Text.module.css";

const Text1 = () => {
  return (
    <div className={styles.Text1Wrapper}>
      <p className={styles.Txt1}>
        The top <em>destination</em>
      </p>
      <p className={styles.Txt2}>
        Our trips provide a way for you to focus on what you’re best at. Explore
        our destinations and start planning your school trip!
      </p>
    </div>
  );
};

export default Text1;
