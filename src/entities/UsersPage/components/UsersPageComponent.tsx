import React from 'react';
import { IUsers } from '../../../interfaces/IUsers';
import style from '../UserPage.module.scss';
import UserCard from './UserCard';

interface IProps {
  usersData: IUsers[] | null;
}
const myVar = true;

const UsersPageComponent: React.FC<IProps> = ({ usersData }) => {
  return (
    <div>
      <p>Список пользователей:</p>
      <div className={`${myVar ? style.user_list : ''}`}>
        {usersData?.length ? (
          usersData.map((user) => {
            const { id, name, email } = user;
            return (
              <React.Fragment key={`UserId:${id}`}>
                <UserCard name={name} email={email} />
              </React.Fragment>
            );
          })
        ) : (
          <div>Пользователи не найдены!</div>
        )}
      </div>
    </div>
  );
};

export default UsersPageComponent;
