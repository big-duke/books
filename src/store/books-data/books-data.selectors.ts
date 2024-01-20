
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
 
 export const getStatus = (state:RootState) => state.books.status;
 export const getBooks = (state:RootState) => state.books.books;
 export const getBook = (state:RootState) => state.books.book;
 export const getError = (state:RootState) => state.books.error;
 export const getTotalBooks = (state:RootState) => state.books.totalBooks;
 
 export const getLoadMoreVisible = createSelector(
    [getBooks, getTotalBooks],
    (books, total) => books.length < total
  );
 