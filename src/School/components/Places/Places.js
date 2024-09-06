import React from "react";
import styles from "../../styles/Places.module.css";
import data from "./data.json";
import Card from "./Card";

const Places = () => {
  const elements = data.elements;
  return (
    <div className={styles.container}>
      {elements.map((item, index) => (
        <Card
          {...item}
          key={index}
        />
      ))}
    </div>
  );
};

export default Places;
