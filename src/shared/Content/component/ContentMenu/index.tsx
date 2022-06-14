import React from 'react';
import style from './ContentMenu.module.scss';

const ContentMenu = () => {
  return (
    <div className={style.contentMenu}>
      <div className={style.contentMenuSort}>
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
      <div>
        <p>Публикация</p>
      </div>
    </div>
  );
};

export default ContentMenu;
