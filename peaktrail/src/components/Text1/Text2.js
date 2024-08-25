import React from "react";
import styles from "../../styles/Text.module.css";

const Text2 = () => {
  return (
    <div className={styles.Text2Wrapper}>
      <div>
        <span>Wondering</span>
        <span>what's in</span>
        <span className={styles.laal}>our plan ?</span>
      </div>
        <p>
          First, an amazing destination that wows you. Experience thrilling
          adventures like paragliding, hiking, and mountain biking. Enjoy jeep
          safaris, rock climbing, ice skiing, and camping. And let’s not forget
          the party vibes—dance the night away at exclusive DJ and pool parties!
        </p>
    </div>
  );
};

export default Text2;
