import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { MainPage } from "./pages/main-page/MainPage";
import { BookDetailPage } from "./pages/book-detail-page/BookDetailPage";

const MainLayout = () => {
  return (
    <div style={{width:"732px"}}>
     <SearchBar />
      <hr />
      <Outlet /> 
    </div>
  );
};

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />  
          <Route path=":id" element={<BookDetailPage />} />
          <Route path="*" element={<MainPage />} />        
        </Route>       
      </Routes>
    </Router>
  );
};
