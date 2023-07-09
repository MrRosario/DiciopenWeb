import React from "react";
import ShareIcon from "@/components/shareIcon";
import SocialButton from "@/components/socialButton";
import styles from "./card.module.css";

const Card = () => {
  return (
    <section className={styles.card}>
      <header className={styles.card_heading}>
        <h2>Faça nos dentes sangue nos olhos</h2>
        <BookMarkIcon />
      </header>

      <article className={styles.card_content}>
        <p className={styles.card_contentDefinition}>
          Pessoa ou equipe que, quando é desafiada, não foge; que age com gana,
          com coragem, com comprometimento.
        </p>

        <em className={styles.card_contentExemple}>
          Estamos indo pra batalha com a certeza de que iremos vencer todos
          desafios/inimigos.
        </em>
      </article>
      <section className={styles.card_Icons}>
        <SocialButton />
        <ShareIcon />
      </section>
    </section>
  );
};

const BookMarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="27"
    viewBox="0 0 21 27"
    fill="none"
  >
    <path
      d="M0 26.25V2.17241C0 1.5931 0.217241 1.08621 0.651724 0.651724C1.08621 0.217241 1.5931 0 2.17241 0H18.1035C18.6828 0 19.1897 0.217241 19.6241 0.651724C20.0586 1.08621 20.2759 1.5931 20.2759 2.17241V26.25L10.1379 21.9052L0 26.25ZM2.17241 22.9552L10.1379 19.5879L18.1035 22.9552V2.17241H2.17241V22.9552Z"
      fill="#616161"
    />
  </svg>
);
export default Card;
