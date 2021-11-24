import React from "react";
import styles from "./Home.module.css";
import Flame from "../../components/flame/Flame";
import Title from "../../components/title/Title";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Flame />
      <Title />
    </div>
  );
}
