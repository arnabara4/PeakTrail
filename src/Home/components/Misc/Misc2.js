import React from "react";
import styles from "../../styles/Misc.module.css";
import Pic from "../../assets/HotelPic.jpeg";
import PhonePic4 from "../../assets/PhonePic4.jpg";
import PhonePic5 from "../../assets/PhonePic5.jpg";
import PhonePic6 from "../../assets/PhonePic6.jpg";
const Misc2 = () => {
  return (
    <div>
      <div className={styles.Misc2Wrapper}>
        <div className={styles.Misc2text}>
          <p>
            When the sun sets, get ready for the ultimate party experience—dance
            the night away at exclusive DJ and pool parties!
          </p>
          <p>
            Throughout your trip, stay in luxurious 5-star hotels and travel in
            a stylish Mercedes-Benz bus. Savor local cuisine and uncover special
            hidden gems. Plus, benefit from personalized assistance from a
            travel expert who will guide you every step of the way.
          </p>
          <p>
            That means we take care of everything from the moment you depart
            until the end of the trip. We promise that nothing will be left to
            chance.
          </p>
        </div>
        <img
          src={Pic}
          alt="pic"
        />
      </div>
      <div className={styles.MiscPhoneWrapper}>
        <div className={styles.ImgWrapper}>
          <img
            className={styles.left}
            src={PhonePic5}
            alt="pic"
          />
          <img
            src={PhonePic4}
            alt="pic"
          />
          <img
            className={styles.right}
            src={PhonePic6}
            alt="pic"
          />
        </div>
        <div className={styles.PWrapper}>
          <p>Stay in 5-star luxury hotels</p>
          <p>Enjoy local cuisine</p>
          <p>Travel in a stylish Mercedes-Benz bus</p>
        </div>
      </div>
    </div>
  );
};

export default Misc2;
