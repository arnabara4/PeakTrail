import React from "react";
import styles from "../styles/Misc.module.css";
import Pic1 from "../assets/Pic1.png";
import Pic2 from "../assets/Pic2.png";
import Pic3 from "../assets/Pic3.png";

const Misc = () => {
  return (
    <div className={styles.MiscWrapper}>
      <div className={styles.MiscComp}>
        <img
          src={Pic1}
          alt="pic"
        />
        <div className={styles.Text4Wrapper}>
          <b className={styles.Text4Title}>
            Seamless <em>Booking Process</em>
          </b>
          <p>
            At PeakTrail, we think school trips should be more than just a break
            from class- they should be exciting adventures that make students
            curious, help them work together, gain knowledge, have curriculum
            activities, and create lasting memories.
          </p>
        </div>
      </div>
      <div className={styles.MiscComp}>
        <div className={styles.Text4Wrapper}>
          <b className={styles.Text4Title}>
            Dedicated <em>Support</em>
          </b>
          <p>
            Our support team is available 24/7 to help with any questions or
            issues before, during, and after your trip
          </p>
        </div>
        <img
          src={Pic2}
          alt="pic"
        />
      </div>
      <div className={styles.MiscComp}>
        <img
          src={Pic3}
          alt="pic"
        />
        <div className={styles.Text4Wrapper}>
          <b className={styles.Text4Title}>
            Post-Trip <em>Review</em>
          </b>
          <p>
            After the trip, we review your feedback to discuss the experience.
            This helps us improve and plan better trips in the future
          </p>
        </div>
      </div>
    </div>
  );
};

export default Misc;
