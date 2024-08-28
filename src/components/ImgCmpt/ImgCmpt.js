import React from "react";
import image1 from "../../assets/1.pic1.png";
import image2 from "../../assets/1.pic2.png";
import image3 from "../../assets/1.pic3.png";
import image4 from "../../assets/1.pic4.png";
import styles from "../../styles/Img.module.css";

const ImgCmpt = () => {
  return (
    <div className={styles.imgCmptWrapper}>
      <img
        src={image1}
        alt="pic"
      />
      <img
        src={image2}
        alt="pic"
      />
      <img
        src={image3}
        alt="pic"
      />
      <img
        src={image4}
        alt="pic"
      />
    </div>
  );
};

export default ImgCmpt;
