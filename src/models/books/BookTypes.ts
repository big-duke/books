export enum BookCategory {
  All = "All",
  Art = "art",
  Biography = "biography",
  Computers = "computers",
  History = "history",
  Medical = "medical",
  Poetry = "poetry",
}

export enum BookSortOrder {
  Relevance = "relevance",
  Newest = "newest",
}

export type GetBooksParams =  {
  term: string;
  category: BookCategory;
  sortOrder: BookSortOrder;  
}