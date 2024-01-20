import { BookResponseItem } from "../../api/books/types";

export class BookModel {
  public id = "";
  public authors = [] as string[];
  public categories = [] as string[];
  public title = "";
  public description = "";
  public smallThumbnail = "";
  public thumbnail = "";
  public smallImage = "";
  public mediumImage = "";
  public largeImage = "";

  public static transformFromResponse = ({
    id,
    volumeInfo,
  }: BookResponseItem): BookModel => ({
    id,
    title: volumeInfo.title,
    description: volumeInfo.description || "",
    authors: volumeInfo.authors || [],
    categories: volumeInfo.categories || [],
    smallThumbnail: volumeInfo.imageLinks?.smallThumbnail || "",
    thumbnail: volumeInfo.imageLinks?.thumbnail || "",
    smallImage: volumeInfo.imageLinks?.small || "",
    largeImage: volumeInfo.imageLinks?.large || "",
    mediumImage: volumeInfo.imageLinks?.medium || "",
  });
}
