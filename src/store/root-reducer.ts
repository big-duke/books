import {combineReducers} from '@reduxjs/toolkit';
import { booksData } from './books-data/books-data';
 

export const rootReducer = combineReducers({
  books:  booksData.reducer, 
 
});
