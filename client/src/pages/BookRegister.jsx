import axios from "axios";
import { useEffect, useState } from "react";
import BookRegisterForm from "../components/BookRegisterForm";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";

export default function BookRegister() {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    <section className="w-full flex p-12 h-[calc(100vh-148px)]">
      <div className="w-7/12 bg-base h-[512px] p-4 rounded-l-xl">
        <div className="w-full h-full bg-white rounded-xl p-4">
          <h1 className="text-center text-xl font-semibold mb-4">
            ลงทะเบียนหนังสือ
          </h1>
          <BookRegisterForm bookInfo={null}/>
        </div>
      </div>
      <div className="w-5/12 bg-base rounded-r-xl p-4 h-[512px] overflow-scroll">
        <div className="w-full  bg-white rounded-xl p-4">
          <h1 className="text-center text-xl font-semibold mb-4">
            หนังสือที่เพิ่มล่าสุด
          </h1>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          <div className="grid grid-cols-3 mt-6 justify-items-end">
            {books?.map((book) => {
              if (book.name.includes(searchText)) {
                return (
                  <a href={`/book/${book.id}`} key={book.id} className="hover:bg-[#333] w-full self-center">
                    <BookList
                      key={book.id}
                      name={book.name}
                      author={book.author}
                      cost={book.cost}
                      edition={book.edition}
                    />
                  </a>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
