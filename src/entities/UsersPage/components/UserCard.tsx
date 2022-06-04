import React from 'react';
import style from '../UserPage.module.scss';

interface IProps {
  name: string;
  email: string;
}

const UserCard: React.FC<IProps> = ({ name, email }) => {
  return (
    <div className={style.user_card}>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
