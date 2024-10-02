import React from "react";
import styles from "../styles/Misc.module.css";
import img1 from "../assets/Globe.png";
import img2 from "../assets/Pic1.png";
import img3 from "../assets/Pic2.png";
import img4 from "../assets/Pic3.png";

const Misc2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Comp}>
        <div className={styles.txt}>
          <span>
            Pre-Trip <em className={styles.laal2}>Consultation</em>
          </span>
          <p>
            At PeakTrail, we think school trips should be more than just a break
            from class- they should be exciting adventures that make students
            curious, help them work together, gain knowledge, have curriculum
            activities, and create lasting memories.
          </p>
        </div>
        <img
          src={img1}
          alt="pic"
        />
      </div>
      <div className={styles.Comp}>
        <img
          src={img2}
          alt="pic"
        />
        <div className={styles.txt}>
          <span>
            Seamless <em className={styles.laal2}>Booking Process</em>
          </span>
          <p>
            At PeakTrail, we think school trips should be more than just a break
            from class- they should be exciting adventures that make students
            curious, help them work together, gain knowledge, have curriculum
            activities, and create lasting memories.
          </p>
        </div>
      </div>
      <div className={styles.Comp}>
        <div className={styles.txt}>
          <span>
            Dedicated <em>Support</em>
          </span>
          <p>
            Our support team is available 24/7 to help with any questions or
            issues before, during, and after your trip
          </p>
        </div>
        <img
          style={{}}
          src={img3}
          alt="pic"
        />
      </div>
      <div className={styles.Comp}>
        <img
          src={img4}
          alt="pic"
        />
        <div className={styles.txt}>
          <span>
            Post-Trip <em>Review</em>
          </span>
          <p>
            After the trip, we review your feedback to discuss the experience.
            This helps us improve and plan better trips in the future
          </p>
        </div>
      </div>
    </div>
  );
};

export default Misc2;
