import React from "react";
import { BookModel } from "../../../models/books/BookModel";
import "./styles.css";
import { NavLink } from "react-router-dom";
type BookCardProps = {
  book: BookModel;
};
export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { title, authors, categories, smallThumbnail, id } = book;
  const category = categories[0];
  const author = authors[0];
  const to = `/${id}`
  return (
    <NavLink to={to}>
      <div className="book-card-container">
        <div className="book-card-img">
          <img src={smallThumbnail} alt={title} />
        </div>
        {category && <div className="book-card-category">{category}</div>}
        <div className="book-card-title">{title}</div>
        {author && <div className="book-card-author">{author}</div>}
      </div>
    </NavLink>
  );
};

export default BookCard;
