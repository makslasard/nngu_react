import React from 'react';

import MainLayout from '../../shared/layouts/MainLayout';
import ItemList from '../ItemList';

// import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <MainLayout>
      <ItemList />
    </MainLayout>
  );
};

export default MainPage;
