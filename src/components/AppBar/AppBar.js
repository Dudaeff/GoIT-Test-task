import { useLocation } from 'react-router-dom';
import { Bar, HeaderWrapper, StyledLink } from './AppBar.styled';
import { filterUsers } from 'redux/filter/filterSlice';
import { useDispatch } from 'react-redux';

export const AppBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSelect = evt => {
    dispatch(filterUsers(evt.target.value));
  };

  return (
    <Bar>
      <HeaderWrapper>
        <nav>
          {location.pathname === '/' && (
            <StyledLink to={'/tweets'}>Tweets</StyledLink>
          )}
          {location.pathname === '/tweets' && (
            <StyledLink to={'/'}>Back</StyledLink>
          )}
        </nav>

        <label>
          Select by status
          <select onChange={handleSelect}>
            <option value={'all'} defaultValue>
              All
            </option>
            <option value={'follow'}>Follow</option>
            <option value={'following'}>Following</option>
          </select>
        </label>
      </HeaderWrapper>
    </Bar>
  );
};
