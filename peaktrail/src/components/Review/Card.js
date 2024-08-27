import React from "react";
import styles from "../../styles/Review.module.css";
const Card = (data) => {
  console.log(data.data);
  return (
    <div className={styles.CardWrapper}>
      <div className={styles.Top}>
        <div className={styles.data}>
          <img
            src={data.data.imageLink}
            alt="pic"
          />
          <text>{data.data.name}</text>
        </div>
        <span>★★★★★</span>
      </div>
      <p className={styles.btm}>{data.data.review}</p>
    </div>
  );
};
export default Card;
