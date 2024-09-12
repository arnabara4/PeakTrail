import React from "react";
import styles from "../../styles/Misc.module.css";
import data from "./data.json";
import Card from "./Card";
const Covered = () => {
  const elements = data.elements;
  console.log(data);
  return (
    <div className={styles.CoveredWrapper}>
      {elements.map((item, index) => (
        <Card
          key={index}
          {...item}
        />
      ))}
    </div>
  );
};

export default Covered;
