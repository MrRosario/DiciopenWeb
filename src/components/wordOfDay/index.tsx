import React from "react";
import Link from "next/link";
import styles from "./wordOfDay.module.css";
import Luva from "@/assets/images/luva.jpeg";

type props = {
  link: string;
  imgUrl?: string;
};
const WordOfDay = ({ link, imgUrl }: props) => {
  return (
    <section
      className={styles.wordOfDay}
      style={{ backgroundImage: `url(${!imgUrl ? Luva.src : imgUrl})` }}
    >
      <Link href={link} className={styles.wordOfDay_layer}>
        <h1 className={styles.wordOfDay_title}>Luva de pedreiro</h1>
        <span className={styles.wordOfDay_subtitle}>Sabe o que significa?</span>
        <span className={styles.wordOfDay_floating}>
          Plavra ou frase do dia
        </span>
      </Link>
    </section>
  );
};
export default WordOfDay;
