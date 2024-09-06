import React from "react";
import styles from "../../styles/Misc.module.css";
const Card = ({ logo, title, desc }) => {
  return <div className={styles.CardWrapper}>
    <img src={logo} alt="pic"/>
    <span>{title}</span>
    <p>{desc}</p>
  </div>;
};

export default Card;
