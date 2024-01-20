import React from "react";
import { BookModel } from "../../models/books/BookModel";
import "./styles.css";
type BookDetailProps = {
  book: BookModel;
};
export const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  return (
    <div className="book-detail-container">
      <div className="book-detail-img">
        <img src={book.smallImage} alt={book.title} />
      </div>
      <div className="book-detail-second-col">
        <div className="book-detail-category">{book.categories.join("/")}</div>
        <div className="book-detail-title">{book.title}</div>
        <div className="book-detail-author">{book.authors.join("/")}</div>
        <div>
          <textarea readOnly rows={10} cols={50}>
            {book.description}
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
