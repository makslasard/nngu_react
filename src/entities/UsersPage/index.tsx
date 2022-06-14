import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersUrl } from '../../api/constats';
import { IUsers } from '../../interfaces/IUsers';
import { getUsersData } from '../../store/pages/UsersPage/selectors';
import UsersPageComponent from './components/UsersPageComponent';

const UsersPage = () => {
  const [usersData, setUserData] = React.useState<IUsers[] | null>(null);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: 'SET_DATA', payload: [1, 2, 3] });
    setTimeout(() => {
      fetch(usersUrl)
        .then((response) => response.json())
        .then((data) => setUserData(data));
    }, 2000);
  }, [dispatch]);

  const appState = useSelector(getUsersData);

  return !usersData ? <div>Загрузка...</div> : <UsersPageComponent usersData={usersData} />;
};

export default UsersPage;
