import React, { useRef } from "react";
import styles from "../../styles/Carousel.module.css";
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
    img1,
    img2,
    img3,
    img4,
  ];

  return (
    <div className={styles.CarousalWrapper}>
      <button
        className={styles.prebtn}
        onClick={btnprev}>
        &lt;
      </button>
      <button
        className={styles.postbtn}
        onClick={btnpost}>
        &gt;
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
