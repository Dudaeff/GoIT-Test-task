import { useEffect, useState } from 'react';
import { fetchUsers } from 'services/usersAPI';
import { UserCard } from 'components/UserCard/UserCard';
import { UsersListStyled } from './UsersList.styled';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMorebutton';

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (users.length === 0)
      fetchUsers()
        .then(users => setUsers(users))
        .catch(error => console.error(error.message))
        .finally(setIsLoading(false));
  }, [users.length]);

  const handleLoadMoreBtn = () => {
    setVisible(prevValue => prevValue + 3);
  };

  return (
    <>
      <UsersListStyled>
        {users?.slice(0, visible).map(user => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </UsersListStyled>
      {isLoading && users.length !== visible && (
        <LoadMoreButton onClick={handleLoadMoreBtn} />
      )}
    </>
  );
};
