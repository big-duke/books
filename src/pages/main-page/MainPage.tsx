import React from 'react';
import "./styles.css";
import { BooksList } from '../../components/BooksList/BooksList';
import { MoreButton } from '../../components/MoreButton/MoreButton';
export const MainPage = () => {
    return (
        <div className="main-page-container">     
        <BooksList />
        <MoreButton />
      </div>
    );
};

