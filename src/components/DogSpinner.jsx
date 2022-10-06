import React from "react";
import styles from "./DogSpinner.module.css";
import RunningDog from "./assets/running_dog.gif";

function DogSppiner() {
  return (
    <div className={styles.spinner}>
      <img className={styles.image} src={RunningDog} alt="Dog running" />
    </div>
  );
}

export default DogSppiner;
