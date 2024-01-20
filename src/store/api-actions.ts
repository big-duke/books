import { createAsyncThunk } from "@reduxjs/toolkit";

import { AxiosError } from "axios";

import { BookModel } from "../models/books/BookModel";
import { BookCategory, GetBooksParams } from "../models/books/BookTypes";
import { booksApi } from "../api/books/booksApi";
import { AppDispatch, RootState } from "./store";
import { toast } from "react-toastify";
import { setQuery } from "./books-data/books-data";

type AsyncThunkConfig = {
  dispatch: AppDispatch;
  state: RootState;
};
const PAGE_SIZE = 30;
export const getBooksAction = createAsyncThunk<
  { items: BookModel[]; totalItems: number },
  GetBooksParams,
  AsyncThunkConfig
>("books/getBooks", async (params, { dispatch, rejectWithValue }) => {
  const { term, category, sortOrder } = params;
  const query =
    category === BookCategory.All
      ? `intitle:${term}`
      : `intitle:${term}+subject:${category}`;
  const apiParams = {
    q: query,
    orderby: sortOrder,
  };
  if (term === "") {
    toast.warn("Указан пустой поисковый запрос");
    return { items: [], totalItems: NaN };
  }
  try {
    const { items, totalItems } = await booksApi.getBooks(apiParams);
    if (items) {
      dispatch(setQuery(apiParams));
      return { items: items.map(BookModel.transformFromResponse), totalItems };
    }
    return { items: [], totalItems };
  } catch (error) {
    if (error instanceof AxiosError) {
      const errMessage = error.response?.data.error.message;
      toast.error(errMessage);
      return rejectWithValue(error.response?.data.error.message);
    }
    toast.warn("Во время выполнения запроса произошла ошибка");
    return rejectWithValue(JSON.stringify(error));
  }
});

export const getMoreBooksAction = createAsyncThunk<
  { items: BookModel[]; totalItems: number; startIndex: number },
  undefined,
  AsyncThunkConfig
>("books/getMoreBooks", async (_arg, { rejectWithValue, getState }) => {
  const { books } = getState();
  const startIndex = books.startIndex + PAGE_SIZE;
  const apiParams = {
    ...books.query,
    startIndex,
  };

  try {
    const { items, totalItems } = await booksApi.getBooks(apiParams);
    if (items) {
      return {
        items: items.map(BookModel.transformFromResponse),
        totalItems,
        startIndex,
      };
    }
    return { items: [], totalItems, startIndex };
  } catch (error) {
    if (error instanceof AxiosError) {
      const errMessage = error.response?.data.error.message;
      toast.error(errMessage);
      return rejectWithValue(error.response?.data.error.message);
    }
    toast.warn("Во время выполнения запроса произошла ошибка");
    return rejectWithValue(JSON.stringify(error));
  }
});

export const getBookByIdAction = createAsyncThunk<
  BookModel,
  string,
  AsyncThunkConfig
>("books/getBookById", async (id, { rejectWithValue }) => {
  try {
    const book = await booksApi.getBookById(id);
    return BookModel.transformFromResponse(book);
  } catch (error) {
    if (error instanceof AxiosError) {
      const errMessage = error.response?.data.error.message;
      toast.error(errMessage);
      return rejectWithValue(error.response?.data.error.message);
    }
    toast.warn("Во время выполнения запроса произошла ошибка");
    return rejectWithValue(JSON.stringify(error));
  }
});
