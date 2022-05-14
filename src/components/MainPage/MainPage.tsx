import React from 'react';

import style from './MainPage.module.scss';

import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import CardProduct from '../CardProduct/CardProduct';

const MainPage = () => {
  const data = [
    {
      id: 1,
      nameBoots: 'Куртка',
      priseBoots: 1500,
      desctiption: 'Очень теплая куртка!',
    },
    {
      id: 2,
      nameBoots: 'Шапка',
      priseBoots: 7000,
      desctiption: 'Согревающая зимой шапка! Очень тепло!',
    },
    {
      id: 3,
      nameBoots: 'Ботинки',
      priseBoots: 500,
      desctiption: 'Ботинки прекрасны в эксплуатации. Главное правильно использовать!',
    },
  ];
  // {
  //   id: 2,
  //   nameBoots: 'Boots Two',
  //   priseBoots: 1500,
  //   desctiption: `Ботинки прекрасны в эксплуатации. Главное правильно использовать!`,
  // },

  return (
    <div className={style.wrapper}>
      <h1 className={style.main_page}>Main page</h1>
      <Header />
      <ItemList />
      {data.map((item) => {
        return (
          <CardProduct
            key={item.id}
            nameBoots={item.nameBoots}
            priseBoots={item.priseBoots}
            desctiption={item.desctiption}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default MainPage;
