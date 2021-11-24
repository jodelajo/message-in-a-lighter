import React from "react";
import styles from "./Home.module.css";
import Flame from "../../components/flame/Flame";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
     <div className={styles.flame}>
     <Flame/>
     </div>
      
      <div className={styles.text}>
        <p className={styles.title}>Message in a</p>
        <p className={styles.lighter}>lighter</p>
      </div>
    </div>
  );
}
