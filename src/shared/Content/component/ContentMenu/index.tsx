import React from 'react';
import style from './ContentMenu.module.scss';

const ContentMenu = () => {
  return (
    <div className={style.contentMenu}>
      <div className={style.contentMenuSort}>
        <p>Название объявления</p>

        <div className={style.contentMenuSortWrapper}>
          <svg
            width="8"
            height="4"
            viewBox="0 0 8 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M4 0L8 4H0L4 0Z" fill="#ababab" />
          </svg>

          <svg
            width="8"
            height="4"
            viewBox="0 0 8 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L3.49691e-07 -2.22545e-07L8 4.76837e-07L4 4Z" fill="#ababab" />
          </svg>
        </div>
      </div>
      <div>
        <p>Категория</p>
      </div>
      <div>
        <p>Дата публикации</p>
      </div>
      <div>
        <p>Публикация</p>
      </div>
    </div>
  );
};

export default ContentMenu;
