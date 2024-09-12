import React from "react";
import styles from "../../styles/Carousal2.module.css";

const Card = ({ review, img, name, profession }) => {
  return (
    <div className={styles.card}>
      <p>{review}</p>
      <div className={styles.data}>
        <img
          src={img}
          alt="pic"
        />
        <span>{name}</span>
        <text>{profession}</text>
      </div>
    </div>
  ); 
};

export default Card;
