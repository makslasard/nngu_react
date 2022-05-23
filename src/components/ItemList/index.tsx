import React from 'react';
import Button from '../../shared/Button';

import style from './ItemList.module.scss';

const ItemList = () => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('');

  const handleAddBasketOne = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const charInfo = count ? `Количество товаров: ${count}` : 'Корзина пустая';
  const isFull = count === 5;

  return (
    <div>
      <div className={style.main_header}>
        <p>{charInfo}</p>
        {isFull && <p>Корзина заполнена!</p>}
        <Button btnText="Добавить товар!" handleClick={handleAddBasketOne} />
        <p>{name || 'Укажите имя:'}</p>
        <input type="text" onChange={handleNameInput} />
      </div>
    </div>
  );
};

export default ItemList;
