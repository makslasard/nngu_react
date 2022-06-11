import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <footer className={style.footer}>
        <div className={style.headerLeft}>
          <img height={20} width={102} src="/img/logo.svg" alt="logo" />
          <p>Доска объявлений</p>
        </div>
        <div className={style.headerRight}>
          <p>&copy; OOO &laquo;Доска диджитал&raquo;, 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
