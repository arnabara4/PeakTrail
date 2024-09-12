import React from "react";
import Pics1 from "./Pics1";
import styles from "../../styles/Header.module.css";
import Text from "./Text";
import Pics2 from "./Pics2";

const Header = () => {
  return (
    <div className={styles.HeadWrapper}>
      <Pics1 />
      <Text />
      <Pics2 />
    </div>
  );
};

export default Header;
