import { LoadMoreStyled } from './LoadMorebutton.styled';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <LoadMoreStyled
      type="button"
      onClick={onClick}
      aria-label="load more users button"
    >
      Load more
    </LoadMoreStyled>
  );
};
