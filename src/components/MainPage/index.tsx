import React from 'react';

import ItemList from '../ItemList';

import style from './MainPage.module.scss';

const MainPage = () => {
  // ================================================

  // Пример использования JSX:
  //   const isTrue = true;
  //   const text1 = 'text1';
  //   const text2 = 'text2';

  //   return <div className={style.main_page}>{isTrue ? text1 : text2}</div>;

  // ================================================

  return (
    <div className={style.page_wrapper}>
      <ItemList />
    </div>
  );
};

export default MainPage;
