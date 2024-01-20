import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getBookByIdAction, getBooksAction, getMoreBooksAction } from "../api-actions";
import { BookModel } from "../../models/books/BookModel";

type Status = "idle" | "loading" | "succeeded" | "failed";
type Query = { q: string; orderby: string };
type BooksData = {
  books: BookModel[];
  book: BookModel | null;
  totalBooks: number;
  status: Status;
  error: string;
  startIndex: number;
  query: Query;
};

const initialState: BooksData = {
  books: [],
  book: null,
  totalBooks: NaN,
  status: "idle",
  error: "",
  startIndex: NaN,
  query: {
    q: "",
    orderby: "",
  },
};

export const booksData = createSlice({
  name: "books",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    setQuery: (state, action: PayloadAction<Query>) => {
      state.query = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBooksAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBooksAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(getBooksAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload.items;
        state.totalBooks = action.payload.totalItems;
        state.startIndex = 0;
      })
      .addCase(getBookByIdAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBookByIdAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(getBookByIdAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.book = action.payload;       
      })
      .addCase(getMoreBooksAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMoreBooksAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(getMoreBooksAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = [...state.books, ...action.payload.items];
        state.totalBooks = action.payload.totalItems;
        state.startIndex = action.payload.startIndex;
      });
  },
});

export const { setStatus, setQuery } = booksData.actions;
