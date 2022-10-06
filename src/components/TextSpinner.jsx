import React from "react";
import styles from "./TextSpinner.module.css";
import Spinner from "./assets/spin_segments.gif";

function TextSpinner() {
  return (
    <div className={styles.spinner}>
      <img className={styles.image} src={Spinner} alt="Dog running" />
    </div>
  );
}

export default TextSpinner;
