"use client";

import React, { useContext } from "react";
import LogoSmall from "@/components/logoSmall";
import { usePathname } from "next/navigation";
import { ModalContext } from "@/context/modalContext";
import Link from "next/link";
import styles from "./header.module.css";

type props = {
  backLink?: string;
};

const Header = ({ backLink }: props) => {
  const { toggleDrawer, isDrawerOpen }: any = useContext(ModalContext);
  const pathname = usePathname();
  const pageRoutes = [
    { name: "Home", pathname: "/", pageTitle: "Home" },
    { name: "Saved", pathname: "/saved", pageTitle: "Itens salvos" },
  ];

  const currentPathName = () => {
    return pageRoutes.find((item) => item.pathname === pathname);
  };

  return pathname === "/" ? (
    <header className={styles.header}>
      <section className={styles.header_icons}>
        <MenuIcon handleModal={toggleDrawer} />
        <LogoSmall path="/" />
      </section>

      <section className={styles.header_input}>
        <input name="text" placeholder="Digite Qualquer palavra" />
        <SearchIcon />
      </section>
    </header>
  ) : (
    <header className={styles.header}>
      <BackButton backLink={backLink} />
      <span className={styles.header_pageTitle}>
        {currentPathName()?.pageTitle}
      </span>
      <SearchIconFull />
    </header>
  );
};

const MenuIcon = ({ handleModal }: any) => (
  <div onClick={handleModal}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
    >
      <path d="M0 16V14H22V16H0ZM0 9V7H22V9H0ZM0 2V0H22V2H0Z" fill="#101010" />
    </svg>
  </div>
);
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M18.7778 20L11.4722 12.6944C10.9167 13.1759 10.2689 13.5509 9.52892 13.8194C8.78893 14.088 8.00152 14.2222 7.16667 14.2222C5.16367 14.2222 3.46847 13.5278 2.08108 12.1389C0.693695 10.75 0 9.07407 0 7.11111C0 5.14815 0.694444 3.47222 2.08333 2.08333C3.47222 0.694444 5.15278 0 7.125 0C9.09722 0 10.7731 0.694444 12.1528 2.08333C13.5324 3.47222 14.2222 5.14954 14.2222 7.11528C14.2222 7.9088 14.0926 8.67593 13.8333 9.41667C13.5741 10.1574 13.1852 10.8519 12.6667 11.5L20 18.7778L18.7778 20ZM7.13889 12.5556C8.64352 12.5556 9.92245 12.0231 10.9757 10.9583C12.0289 9.89352 12.5556 8.61111 12.5556 7.11111C12.5556 5.61111 12.0289 4.3287 10.9757 3.26389C9.92245 2.19907 8.64352 1.66667 7.13889 1.66667C5.61883 1.66667 4.32678 2.19907 3.26272 3.26389C2.19868 4.3287 1.66667 5.61111 1.66667 7.11111C1.66667 8.61111 2.19868 9.89352 3.26272 10.9583C4.32678 12.0231 5.61883 12.5556 7.13889 12.5556Z"
      fill="#616161"
    />
  </svg>
);
const BackButton = ({ backLink = "/" }: props) => (
  <Link href={backLink}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
    >
      <path
        d="M10.0918 19.7128L0.252294 10.5483C0.158852 10.4613 0.0934423 10.3742 0.0560654 10.2872C0.0186885 10.2002 0 10.1044 0 10C0 9.89556 0.0186885 9.79983 0.0560654 9.71279C0.0934423 9.62576 0.158852 9.53873 0.252294 9.4517L10.0918 0.287206C10.2973 0.0957354 10.559 0 10.8767 0C11.1944 0 11.456 0.0957354 11.6616 0.287206C11.8859 0.496084 11.998 0.744125 11.998 1.03133C11.998 1.31854 11.8859 1.56658 11.6616 1.77546L2.8313 10L11.6616 18.2245C11.9046 18.4508 12.0167 18.7032 11.998 18.9817C11.9793 19.2602 11.8672 19.4952 11.6616 19.6867C11.4373 19.8956 11.171 20 10.8627 20C10.5543 20 10.2973 19.9043 10.0918 19.7128Z"
        fill="black"
      />
    </svg>
  </Link>
);
const SearchIconFull = () => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M7.36496 14.5946C5.28678 14.5946 3.53974 13.8856 2.12383 12.4675C0.707945 11.0494 0 9.32419 0 7.29181C0 5.25943 0.709207 3.53604 2.12762 2.12162C3.54603 0.707207 5.27167 0 7.30454 0C9.33741 0 11.0612 0.708504 12.476 2.12551C13.8907 3.54252 14.5981 5.2678 14.5981 7.30135C14.5981 8.12748 14.481 8.87838 14.2467 9.55405C14.0124 10.2297 13.67 10.8739 13.2194 11.4865L19.6263 17.8378C19.8606 18.0821 19.9778 18.3817 19.9778 18.7366C19.9778 19.0916 19.8606 19.3911 19.6263 19.6351C19.368 19.8784 19.0685 20 18.7276 20C18.3868 20 18.0916 19.8739 17.8421 19.6216L11.502 13.2703C10.9528 13.6833 10.3317 14.0073 9.63856 14.2422C8.94544 14.4771 8.18757 14.5946 7.36496 14.5946ZM7.31097 12.1351C8.6804 12.1351 9.82727 11.6708 10.7516 10.7421C11.6759 9.81344 12.1381 8.66888 12.1381 7.30843C12.1381 5.94798 11.6754 4.7997 10.75 3.86359C9.82463 2.9275 8.67909 2.45946 7.31335 2.45946C5.93262 2.45946 4.77855 2.9275 3.85114 3.86359C2.92375 4.7997 2.46005 5.94798 2.46005 7.30843C2.46005 8.66888 2.92242 9.81344 3.84717 10.7421C4.77193 11.6708 5.92653 12.1351 7.31097 12.1351Z"
        fill="black"
      />
    </svg>
  </div>
);
export default Header;
