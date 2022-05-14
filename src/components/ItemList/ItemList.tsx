import React from 'react';

import style from './ItemList.module.scss';

const ItemList = () => {
  return (
    <div>
      <ul className={style.item_list}>
        <li className={style.item_list_elem}>
          <a href="/">Home</a>
        </li>
        <li className={style.item_list_elem}>
          <a href="/">Company</a>
        </li>
        <li className={style.item_list_elem}>
          <a href="/">About</a>
        </li>
        <li className={style.item_list_elem}>
          <a href="/">Contact</a>
        </li>
        <li className={style.item_list_elem}>
          <a href="/">Sales</a>
        </li>
      </ul>
    </div>
  );
};

export default ItemList;
