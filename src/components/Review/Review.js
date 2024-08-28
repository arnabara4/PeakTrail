import React from "react";
import styles from "../../styles/Review.module.css";
import data from "./data.json";
import Card from "./Card";
const Review = () => {
  const reviews = data.items;
  return (
    <div className={styles.reviewWrapper}>
      {reviews.map((item, index) => (
        <Card
          data={item}
          key={index}
        />
      ))}
    </div>
  );
};

export default Review;
