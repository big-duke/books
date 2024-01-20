import { BaseRequest } from "../baseRequest";
import { APIRoute } from "./routes";
import { BooksApi } from "./types";

const BACKEND_URL = "https://www.googleapis.com/books";
const API_KEY = "API_KEY";
const PAGE_SIZE = 30;
class BooksApiMaker extends BaseRequest implements BooksApi {
  public getBookById: BooksApi["getBookById"] = async (id: string) =>
    this.get(APIRoute.GetBookById.replace(":id", id));
  public getBooks: BooksApi["getBooks"] = async (params) =>
    this.get(APIRoute.GetBooks, { params });
}

const apiConfig = {
  baseURL: BACKEND_URL,
  params: { key: API_KEY, maxResults: PAGE_SIZE },
};
export const booksApi = new BooksApiMaker(apiConfig);
