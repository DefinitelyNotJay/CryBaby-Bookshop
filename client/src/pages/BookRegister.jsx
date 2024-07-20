import axios from "axios";
import { useEffect, useState } from "react";
import BookRegisterForm from "../components/book-register-form";
import Book from "../components/book";

export default function BookRegister() {
  const [books, setBooks] = useState([]);

  async function getAllBooks() {
    await axios
      .get("http://localhost:3000/api/book/all", {
        withCredentials: true,
      })
      .then((books) => {
        setBooks(books.data);
      });
  }

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <section className="w-full flex  p-12 h-[calc(100vh-144px)]">
      <div className="w-7/12 bg-base h-full p-4 rounded-l-xl">
        <div className="w-full h-full bg-white rounded-xl p-4">
          <h1 className="text-center text-xl font-semibold mb-4">
            ลงทะเบียนหนังสือ
          </h1>
          <BookRegisterForm />
        </div>
      </div>
      <div className="w-5/12 bg-base rounded-r-xl p-4">
        <div className="w-full h-full bg-white rounded-xl p-4 overflow-scroll ">
          <h1 className="text-center text-xl font-semibold">
            หนังสือที่เพิ่มล่าสุด
          </h1>
          <div className="grid grid-cols-2 mt-4 justify-items-end ">
            {books?.map((book) => (
              <Book
                key={book.id}
                name={book.name}
                author={book.author}
                cost={book.cost}
                edition={book.edition}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
