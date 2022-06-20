import React from 'react';
import style from './ContentCard.module.scss';

const ContentCard = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.contentCard}>
        <div className={style.contentCardItem_1}>
          <p>
            <b>Чепчик</b>
          </p>
        </div>
        <div className={style.contentCardItem_2}>
          <p>Одежда</p>
        </div>
        <div className={style.contentCardItem_3}>
          <p>12 апреля</p>
        </div>
        <div className={style.contentCardItem_4}>
          <p>Да</p>
        </div>
        <div className={style.contentCardSelect}>
          <div className={style.contentCardStyleSvg}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="#ababab"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  stroke="#ababab"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  stroke="#ababab"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>

          <div className={style.contentCardSelectList}>
            <div className={style.contentCardSelectItem}>
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.833374 8.00016C0.833374 8.00016 4.16671 1.3335 10 1.3335C15.8334 1.3335 19.1667 8.00016 19.1667 8.00016C19.1667 8.00016 15.8334 14.6668 10 14.6668C4.16671 14.6668 0.833374 8.00016 0.833374 8.00016Z"
                  stroke="#ababab"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.5C11.3807 10.5 12.5 9.38071 12.5 8C12.5 6.61929 11.3807 5.5 10 5.5C8.61929 5.5 7.5 6.61929 7.5 8C7.5 9.38071 8.61929 10.5 10 10.5Z"
                  stroke="#ababab"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <li>
                <a href="/">Просмотреть</a>
              </li>
            </div>
            <hr />
            <div className={style.contentCardSelectItem}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.1666 2.49993C14.3855 2.28106 14.6453 2.10744 14.9313 1.98899C15.2173 1.87054 15.5238 1.80957 15.8333 1.80957C16.1428 1.80957 16.4493 1.87054 16.7353 1.98899C17.0213 2.10744 17.2811 2.28106 17.5 2.49993C17.7188 2.7188 17.8924 2.97863 18.0109 3.2646C18.1294 3.55057 18.1903 3.85706 18.1903 4.16659C18.1903 4.47612 18.1294 4.78262 18.0109 5.06859C17.8924 5.35455 17.7188 5.61439 17.5 5.83326L6.24996 17.0833L1.66663 18.3333L2.91663 13.7499L14.1666 2.49993Z"
                  stroke="#ababab"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <li>
                <a href="../../pages/EditPage/index.tsx">Редактировать</a>
              </li>
            </div>
            <hr />
            <div className={style.contentCardSelectItem}>
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.5 5H3.16667H16.5"
                  stroke="#ababab"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.66663 4.99984V3.33317C5.66663 2.89114 5.84222 2.46722 6.15478 2.15466C6.46734 1.8421 6.89127 1.6665 7.33329 1.6665H10.6666C11.1087 1.6665 11.5326 1.8421 11.8451 2.15466C12.1577 2.46722 12.3333 2.89114 12.3333 3.33317V4.99984M14.8333 4.99984V16.6665C14.8333 17.1085 14.6577 17.5325 14.3451 17.845C14.0326 18.1576 13.6087 18.3332 13.1666 18.3332H4.83329C4.39127 18.3332 3.96734 18.1576 3.65478 17.845C3.34222 17.5325 3.16663 17.1085 3.16663 16.6665V4.99984H14.8333Z"
                  stroke="#ababab"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.33337 9.1665V14.1665"
                  stroke="#ababab"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6666 9.1665V14.1665"
                  stroke="#ababab"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <li>
                <a href="/">Удалить</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
