import React from "react";
import styles from "../../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.NavWrapper}>
      <span className={styles.NavLogo}>PeakTrail</span>
      <ul className={styles.Nav}>
        <li>Home</li>
        <li>School</li>
        <li>Corporate</li>
      </ul>
      <button className={styles.ContactBtn}>Contact Us</button>
    </div>
  );
};

export default Navbar;
