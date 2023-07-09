import React from "react";
import CloseIcon from "@/components/closeIcon";
import styles from "./drawer.module.css";
import Link from "next/link";

type props = {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
};
const Drawer = ({ isDrawerOpen, toggleDrawer }: props) => {
  const routes = [
    { name: "Início", path: "/" },
    { name: "Itens salvas", path: "/saved" },
    { name: "Novas definições", path: "/new" },
    { name: "ABC", path: "/abc" },
    { name: "Termos de uso", path: "/terms" },
    { name: "Sair", path: "/" },
  ];

  const renderClasses = () => {
    return `${styles.drawer} ${
      isDrawerOpen ? styles.slideUp : styles.slidedown
    }`;
  };

  return (
    <section className={renderClasses()}>
      <header className={styles.drawer_heading}>
        <CloseIcon handlClose={toggleDrawer} />
        <button className={styles.drawer_loginButton}>Entrar</button>
      </header>
      <section className={styles.drawer_content}>
        {routes.map((item: any) => {
          return (
            <Link href={item.path} key={item.name}>
              {item.name}
            </Link>
          );
        })}
      </section>
    </section>
  );
};
export default Drawer;
