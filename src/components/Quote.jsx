import React from "react";
import styles from "./Quote.module.css";

function Quote({ text, author }) {
  return (
    <div className={styles.quote}>
      <p className={styles.text}>{text}</p>
      <p className={styles.author}>-{author}</p>
    </div>
  );
}

export default Quote;
