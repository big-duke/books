import React from "react";
import { useAppSelector } from "../../hooks/redux";
import {
  getBooks,
  getError,
  getStatus,
  getTotalBooks,
} from "../../store/books-data/books-data.selectors";

import "./styles.css";
import { Spinner } from "../Spinner/Spinner";
import BookCard from "./BookCard/BookCard";
import { useNavigate } from "react-router-dom";

export const BooksList = () => {
  const status = useAppSelector(getStatus);
  const books = useAppSelector(getBooks);
  const error = useAppSelector(getError);
  const total = useAppSelector(getTotalBooks);



  if (status === "idle") {
    return <div>Для поиска книг введите поисковый запрос и нажмите Enter</div>;
  }

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

  if (status === "succeeded" && books.length === 0) {
    return <div>Ничего не найдено</div>;
  }
 
  return (
    <div className="books-list-wrapper">
      <h4>Found {total} results</h4>
      <div className="books-list">
        {books.map((book) => {
          return <BookCard book={book} key={book.id} />;
        })}
      </div>
    </div>
  );
};
