import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getMoreBooksAction } from "../../store/api-actions";
import { getLoadMoreVisible, getStatus } from "../../store/books-data/books-data.selectors";

export const MoreButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(getLoadMoreVisible);
  const status = useAppSelector(getStatus);
  const disabled = status ==='loading' || status === 'failed';
  const handleLoadMore = () => dispatch(getMoreBooksAction());

  if (isVisible) {
    return (
      <div>
        <button onClick={handleLoadMore} disabled={disabled}>Load more</button>
      </div>
    );
  }

  return null;
};
