import React from 'react';
import { sitebarConfig } from './sidebarConfig';
import style from './sidebar.module.scss';

const SideBar = () => {
  return (
    <div className={style.sidebar_wrapper}>
      <ul className={style.sidebar_menu}>
        {sitebarConfig.map((menuItem) => {
          return (
            <li key={menuItem.id} className={style.sidebar_menu_item}>
              {menuItem.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
