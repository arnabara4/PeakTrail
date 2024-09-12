import React from "react";
import styles from "../styles/Misc.module.css";
import img1 from "../assets/image 19.png";
import img2 from "../assets/Screenshot 2024-09-12 at 7.53.52 AM.png";
import img3 from "../assets/Screenshot 2024-09-12 at 7.52.40 AM 1.png";

const Misc = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Comp}>
        <img
          src={img1}
          alt="pic"
        />
        <div className={styles.txt}>
          <span>Fun Getaways</span>
          <p>
            No lectures, just pure fun! Beach parties, thrilling hikes, and
            unforgettable memories with your squad
          </p>
        </div>
      </div>
      <div className={styles.Comp}>
        <div className={styles.txt}>
          <span>Cultural Escapes</span>
          <p>
            Immerse yourself in new cultures, languages, and local traditions.
            Discover the world beyond textbooks.
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
          src={img2}
          alt="pic"
        />
        <div className={styles.txt}>
          <span>Acedemic Trips</span>
          <p>
            Dive into knowledge beyond the classroom with our curated academic
            experiences. Perfect for expanding your learning while having fun
          </p>
        </div>
      </div>
    </div>
  );
};

export default Misc;
