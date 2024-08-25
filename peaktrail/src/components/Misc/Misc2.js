import React from "react";
import styles from "../../styles/Misc.module.css";
import Pic from "../../assets/HotelPic.jpeg";

const Misc2 = () => {
  return (
    <div className={styles.Misc2Wrapper}>
      <div className={styles.Misc2text}>
        <p>
          Stay in 5-star luxury hotels and travel in a stylish Mercedes-Benz
          bus. Enjoy local cuisine and discover special hidden gems. Plus, get
          personalized help from a travel expert who guides you throughout your
          trip.
        </p>
        <p>
          That means starting from departing from the place and ending the trip
          we take care of everything. We promise nothing can be left.  
        </p>
      </div>
      <img
        src={Pic}
        alt="pic"
      />
    </div>
  );
};

export default Misc2;
