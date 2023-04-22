import { useEffect, useState } from 'react';
import { fetchUsers } from 'services/usersAPI';
import { UserCard } from 'components/UserCard/UserCard';
import { UsersListStyled } from './UsersList.styled';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMorebutton';

export const UsersList = () => {
  const [visibleCardsQty, setVisibleCardsQty] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  // const [onlyFollowUsers, setOnlyFollowUsers] = useState([]);
  const [onlyFollowingUsers, setOnlyFollowingUsers] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  console.log(onlyFollowingUsers);

  useEffect(() => {
    setIsLoading(true);
    if (users.length === 0)
      fetchUsers()
        .then(users => setUsers(users))
        .catch(error => console.error(error.message))
        .finally(setIsLoading(false));
  }, [users.length]);

  const handleLoadMoreBtn = () => {
    setVisibleCardsQty(prevValue => prevValue + 3);
  };

  const onFollowBtnClick = id => {
    const followed = users.find(user => user.id === id);
    setOnlyFollowingUsers(prevUsers => [
      ...prevUsers,
      { ...followed, following: true },
    ]);
  };

  return (
    <>
      <UsersListStyled>
        {users?.slice(0, visibleCardsQty).map(user => (
          <li key={user.id}>
            <UserCard
              user={user}
              onFollowClick={onFollowBtnClick}
              following={onlyFollowingUsers}
            />
          </li>
        ))}
      </UsersListStyled>
      {isLoading && users.length !== visibleCardsQty && (
        <LoadMoreButton onClick={handleLoadMoreBtn} />
      )}
    </>
  );
};
