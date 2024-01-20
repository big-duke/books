type GetBooksApiParams = {
  q: string;
  orderby: string;
  startIndex?: number;
};

export type BookResponseItem = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    categories?: string[];
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
      small?: string;
      medium?: string;
      large?: string;
    };
  };
};

export interface BooksApi {
  getBooks: (
    params: GetBooksApiParams
  ) => Promise<{ items: BookResponseItem[]; totalItems: number }>;
  getBookById: (id: string) => Promise<BookResponseItem>;
}
