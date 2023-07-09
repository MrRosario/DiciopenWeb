"use client";

import React, { useContext } from "react";
import Card from "@/components/card";
import WordOfDay from "@/components/wordOfDay";
import FloatingButton from "@/components/floatingButton";
import { ModalContext } from "@/context/modalContext";
import Drawer from "@/components/drawer";
import styles from "@/styles/home.module.css";

export default function Home() {
  const { toggleDrawer, isDrawerOpen }: any = useContext(ModalContext);
  return (
    <>
      <main>
        <section className={styles.wordOfDayWrapper}>
          <WordOfDay link={"/"} />
        </section>
        <section className={styles.listCard}>
          <Card />
          <Card />
          <Card />
        </section>
        <FloatingButton />
      </main>
      {isDrawerOpen && (
        <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      )}
    </>
  );
}
