import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ManagerNavbar from "./components/ManagerNavbar";
import BookRegister from "./pages/BookRegister";
import Book from "./pages/Book";
import CustomerNavbar from "./components/CustomerNavbar";
import Home from "./pages/customer/Home";
import Search from "./pages/customer/Search";

function App() {
  return (
    <div className="font-NotoSans">
      <Routes>
        <Route path="/" element={<CustomerNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/:searchText" element={<Search />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ManagerNavbar />}>
          <Route path="/book-register" element={<BookRegister />} />
          <Route path="/book/:id" element={<Book />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
