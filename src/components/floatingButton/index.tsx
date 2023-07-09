import React from "react";
import styles from "./floatingButton.module.css";

const FloatingButton = () => (
  <button className={styles.floatingButton}>
    <PlusIcon />
  </button>
);

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M8.92857 20V11.0714H0V8.92857H8.92857V0H11.0714V8.92857H20V11.0714H11.0714V20H8.92857Z"
      fill="white"
    />
  </svg>
);

export default FloatingButton;
