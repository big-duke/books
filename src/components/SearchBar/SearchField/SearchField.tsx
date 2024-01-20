import React from "react";
import "./styles.css";
import { useAppSelector } from "../../../hooks/redux";
import { getStatus } from "../../../store/books-data/books-data.selectors";

export const SearchField: React.FC = () => {
  const status = useAppSelector(getStatus);
  const disabled = status ==='loading'
  return (
    <div className="search-container">
      <input type="search" name="term" placeholder="Поиск книг..." />
      <button className="search-button" type="submit" disabled={disabled}>
        <span role="img" aria-label="Search">
          🔍
        </span>
      </button>
    </div>
  );
};
