import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import BookDetail from "../../components/BookDetail/BookDetail";
import { useEffect } from "react";
import { getBookByIdAction } from "../../store/api-actions";
import {
  getBook,
  getError,
  getStatus,
} from "../../store/books-data/books-data.selectors";
import { Spinner } from "../../components/Spinner/Spinner";

export const BookDetailPage = () => {
  const { id } = useParams();
  const status = useAppSelector(getStatus);
  const book = useAppSelector(getBook);
  const error = useAppSelector(getError);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getBookByIdAction(id));
    }
  }, [dispatch, id]);

  if (status === "failed") {
    return (
      <div className="error">
        Во время поиска произошла ошибка
        <br />
        {error}
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div>
        Выполняется поисковый запрос
        <Spinner />
      </div>
    );
  }
  if (!book) 
  return (
    <div className="error">
      Книга не найдена
      <br />
      {error}
    </div>
  )

  return <BookDetail book={book} />

}
