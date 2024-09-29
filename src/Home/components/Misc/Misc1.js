import React from "react";
import styles from "../../styles/Misc.module.css";
const Misc1 = () => {
  return (
    <div className={styles.Misc1Wrapper}>
      <div className={styles.Misc1Cmpt}>
        <span></span>
        <b>24/7 support ready to help you anytime</b>
        <p>For questions or emergencies, we're always just a call away</p>
      </div>
      <div className={styles.Misc1Cmpt}>
        <span></span>
        <b>200+ hotels tied up</b>
        <p>
          To ensure a smooth and luxurious trip, we’ve partnered with over 200
          hotels so you won’t have any issues with accommodations.
        </p>
      </div>
    </div>
  );
};

export default Misc1;
