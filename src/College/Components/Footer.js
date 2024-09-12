import React from "react";
import Logo from "../assets/Logo.png";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.FooterWrapper}>
        <div className={styles.Comp1}>
          <img
            src={Logo}
            alt="pic"
          />
          <p>
            We are proud to say that since our opening we have been serving our
            travellers in the best possible way. Travel with the “FLYBIRD”
          </p>
        </div>
        <div className={styles.Comp2}>
          <span>Social Media</span>
          <ul>
            <li className={styles.item}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faFacebook} />
              </div>{" "}
              <p>PeakTrail Travel Adventures</p>
            </li>
            <li>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faInstagram} />
              </div>{" "}
              <p>@peaktrail_travel</p>
            </li>
            <li>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>{" "}
              <p>https://www.linkedin.com/company/peaktrail07/</p>
            </li>
          </ul>
        </div>
        <div className={styles.Comp3}>
          <div>
            <text>Email Address</text>
            <p>We are proud to say that since our opening we have </p>
          </div>
          <form>
            <input type="email" />
            <button className={styles.btn}>
              <span class="material-symbols-outlined">chevron_forward</span>
            </button>
          </form>
        </div>
      </div>
      <div className={styles.peaktrail}>PeakTrail</div>
    </div>
  );
};

export default Footer;
