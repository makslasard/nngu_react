import React from 'react';

import style from './CardProduct.module.scss';

interface IData {
  nameBoots: string;
  priseBoots: number;
  desctiption: string;
}

const CardProduct: React.FC<IData> = (props) => {
  const { nameBoots, priseBoots, desctiption } = props;

  return (
    <div className={style.card_product}>
      <div className={style.card_product_item}>
        {nameBoots}
        <div className={style.img_card_product}>
          <img alt="boots" />
        </div>
      </div>
      <div className={style.card_product_item}>
        Описание: {nameBoots}
        <div className={style.card_product_description}>{desctiption}</div>
      </div>
      <div className={style.button_card}>
        <button type="submit" className={style.button_card_product}>
          {priseBoots}
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
