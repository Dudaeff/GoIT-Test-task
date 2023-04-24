import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, loadMoreUsers } from 'redux/users/operations';
import { selectUsers, selectUsersIsLoading } from 'redux/users/selectors';
import { UsersListStyled } from './UsersList.styled';
import { UserCard } from 'components/UserCard/UserCard';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMorebutton';
import { selectFilterStatus } from 'redux/filter/selectors';

export const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectUsersIsLoading);
  const statusFilter = useSelector(selectFilterStatus);
  const [numberOfPage, setNumberOfPage] = useState(2);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLoadMore = () => {
    setNumberOfPage(prevPage => prevPage + 1);
    dispatch(loadMoreUsers(numberOfPage));
  };

  const visibleUsers = users.filter(user => {
    switch (statusFilter) {
      case 'follow':
        return user.isFollowing === false;
      case 'following':
        return user.isFollowing === true;
      default:
        return users;
    }
  });

  return (
    <>
      <UsersListStyled>
        {visibleUsers?.map(user => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </UsersListStyled>
      {!isLoading && visibleUsers.length < 3 && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
    </>
  );
};
