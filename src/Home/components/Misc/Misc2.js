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
            Stay in 5-star luxury hotels and travel in a stylish Mercedes-Benz
            bus. Enjoy local cuisine and discover special hidden gems. Plus, get
            personalized help from a travel expert who guides you throughout
            your trip.
          </p>
          <p>
            That means starting from departing from the place and ending the
            trip we take care of everything. We promise nothing can be left.  
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
          <p>
            Stay in 5-star luxury hotels
          </p>
          <p>Enjoy local cuisine</p>
          <p>Travel in a stylish Mercedes-Benz bus</p>
        </div>
      </div>
    </div>
  );
};

export default Misc2;
