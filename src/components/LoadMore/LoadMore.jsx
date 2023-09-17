import { LoadMoreBut } from './LoadMore.styled';

export const LoadMore = ({ onLoadeMore }) => {
  return (
    <div>
      <LoadMoreBut onClick={() => onLoadeMore()}>Load more</LoadMoreBut>
    </div>
  );
};
