import React from "react";
import { SearchField } from "./SearchField/SearchField";
import { CategorySelector } from "./CategorySelector/CategorySelector";
import { SortOrderSelector } from "./SortOrderSelector/SortOrderSelector";

import "./styles.css";
import { useSearchBar } from "./useSearchBar";

export const SearchBar: React.FC = () => {
 const {categoryOptions, handleSubmit, sortOptions} = useSearchBar();
  return (
    <div className="searchbar-container">
      <form className="searchbar-form" onSubmit={handleSubmit}>
       
          <h1>Search for books</h1>
  
        <SearchField />
        <div className="searchbar-params">
          <CategorySelector options={categoryOptions} />
          <SortOrderSelector options={sortOptions} />
        </div>
      </form>
    </div>
  );
};
