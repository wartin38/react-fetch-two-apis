import React from "react";
import styles from "./DogImage.module.css";

function DogImage({ randomDogImage }) {
  return (
    <div className={styles.dogImageContainer}>
      <img src={randomDogImage} alt="Random dog" />
    </div>
  );
}

export default DogImage;
