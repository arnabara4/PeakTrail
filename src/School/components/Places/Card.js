import React from "react";
import styles from "../../styles/Places.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ Pic, placename, place, desc, star, rating }) => {
  return (
    <div className={styles.itemWrapper}>
      <img
        src={Pic}
        alt="pic"
      />
      <span className={styles.place}>{place}</span>
      <span className={styles.placename}>{placename}</span>
      <p>{desc}</p>
      <rating>
        <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }}/>
        {star}({rating})
      </rating>
    </div>
  );
};

export default Card;
