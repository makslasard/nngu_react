import React from 'react';

import style from './Button.module.scss';

interface IButton {
  btnText?: string;
  handleClick: () => void;
}
const Button: React.FC<IButton> = (props) => {
  const { btnText, handleClick } = props;

  return (
    <div className={style.button_wrapper}>
      <button type="button" className={style.button_name} onClick={handleClick}>
        {btnText}
      </button>
    </div>
  );
};

export default Button;

Button.defaultProps = {
  btnText: '',
};
