import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { BookCategory, BookSortOrder, GetBooksParams } from "../../models/books/BookTypes";
import { getBooksAction } from "../../store/api-actions";

export const useSearchBar = () => {
    const categoryOptions = Object.keys(BookCategory);
    const sortOptions = Object.keys(BookSortOrder);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      navigate("/");
      const form = e.currentTarget;
      const formData = new FormData(form) as unknown as Iterable<
        [GetBooksParams, FormDataEntryValue]
      >;
  
      const params: GetBooksParams = Object.fromEntries(formData);
  
      dispatch(getBooksAction(params));
    };
    return {
        categoryOptions, sortOptions,handleSubmit
    }
}