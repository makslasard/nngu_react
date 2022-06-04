import React from 'react';
import { usersUrl } from '../../api/constats';
import { IUsers } from '../../interfaces/IUsers';
import UsersPageComponent from './components/UsersPageComponent';

const UsersPage = () => {
  const [usersData, setUserData] = React.useState<IUsers[] | null>(null);

  React.useEffect(() => {
    setTimeout(() => {
      fetch(usersUrl)
        .then((response) => response.json())
        .then((data) => setUserData(data));
    }, 2000);
  }, []);

  return !usersData ? <div>Загрузка...</div> : <UsersPageComponent usersData={usersData} />;
};

export default UsersPage;
