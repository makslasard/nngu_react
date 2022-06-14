import React from 'react';
import style from './ContentHeader.module.scss';

const ContentHeader = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.contentHeader}>
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
    </>
  );
};

export default ContentHeader;
