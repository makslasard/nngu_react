import React from 'react';
import style from './Content.module.scss';

const Content = () => {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.content__header}>
          <div>
            <h2>Объявления</h2>
            <p>Всего: 45</p>
          </div>
          <div>
            <button type="button">
              <p>Добавить</p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 4.1665V15.8332"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.16675 10H15.8334"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <hr />

      <div className={style.content__search}>
        <div className={style.content__input}>
          <input placeholder="Найти объявление" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="
              #ababab"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.0001 20.9999L16.6501 16.6499"
              stroke="
              #ababab"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={style.content__searh_right}>
          <p>1 - 8 из 145</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
              <path
                d="M15 18L9 12L15 6"
                stroke="#2C2D2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 6L15 12L9 18"
              stroke="#2C2D2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className={style.content__menu}>
        <div className={style.content__click_1}>
          <p>Название объявления</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
              <path d="M12 7L16 11H8L12 7Z" fill="#2C2D2E" />
              <path d="M12 17L8 13L16 13L12 17Z" fill="#2C2D2E" />
            </g>
          </svg>
        </div>
        <div>
          <p>Категория</p>
        </div>
        <div>
          <p>Дата публикации</p>
        </div>
        <div className={style.content__click_2}>
          <p>Публикация</p>
        </div>
      </div>

      <div className={style.content__card}>
        <div className={style.content__card_1}>
          <p>
            <b>Чепчик</b>
          </p>
        </div>
        <div className={style.content__card_2}>
          <p>Одежда</p>
        </div>
        <div className={style.content__card_3}>
          <p>12 апреля</p>
        </div>
        <div className={style.content__card_4}>
          <p>Да</p>
        </div>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
              <path
                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                stroke="#2C2D2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                stroke="#2C2D2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                stroke="#2C2D2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Content;
