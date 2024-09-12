import React, { useRef, useEffect } from "react";
import styles from "../styles/Carousel.module.css";
import img1 from "./SlideImg/Img1.jpeg";
import img2 from "./SlideImg/Img2.jpeg";
import img3 from "./SlideImg/Img3.jpeg";
import img4 from "./SlideImg/Img4.jpeg";

const SlideShow = () => {
  const boxRef = useRef(null);

  const btnprev = () => {
    const box = boxRef.current;
    if (box) {
      const itemWidth = box.querySelector(`.${styles.item}`).clientWidth;
      box.scrollLeft = box.scrollLeft - itemWidth;
      console.log(itemWidth);
    }
  };

  const btnpost = () => {
    const box = boxRef.current;
    if (box) {
      const itemWidth = box.querySelector(`.${styles.item}`).clientWidth;
      box.scrollLeft = box.scrollLeft + itemWidth;
      console.log(itemWidth);
    }
  };

  const data = [
    img1,
    img2,
    img3,
    img4,
    img1,
    img2,
    img3,
    img4,
  ];
  useEffect(() => {
    const box = boxRef.current;
    if (box) {
      box.scrollLeft = 0; // Ensure it starts with the first image
    }
  }, []);
  return (
    <div className={styles.CarousalWrapper}>
      <button
        className={styles.prebtn}
        onClick={btnprev}>
        <span class="material-symbols-outlined">arrow_back_ios</span>
      </button>
      <button
        className={styles.postbtn}
        onClick={btnpost}>
        <span class="material-symbols-outlined">arrow_forward_ios</span>
      </button>
      <div
        className={styles.container}
        ref={boxRef}>
        {data.map((d, index) => (
          <img
            className={styles.item}
            src={d}
            alt="pic"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
