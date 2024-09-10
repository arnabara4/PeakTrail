import React from "react";
import styles from "../../styles/Navbar.module.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.NavWrapper}>
      <span className={styles.NavLogo}>
        <img
          src={Logo}
          alt="pic"
        />
      </span>
      <ul className={styles.Nav}>
        <li>
          <b>Home</b>
        </li>
        <Link to="/school">
          <li style={{ color: "rgba(0,0,0,0.5)" }}>School</li>
        </Link>
        <Link to="/school">
          <li style={{ color: "rgba(0,0,0,0.5)" }}>College</li>
        </Link>
      </ul>
      <button className={styles.ContactBtn}>Contact Us</button>
    </div>
  );
};

export default Navbar;
