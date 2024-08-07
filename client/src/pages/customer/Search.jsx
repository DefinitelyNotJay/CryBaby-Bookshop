import React, { useEffect, useState } from "react";
import NavGroup from "../../components/NavGroup";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookList from "../../components/BookList";
import BookShowArea from "../../components/BookShowArea";

export default function Search() {
  const [booksData, setBooksData] = useState([]);
  const { searchText } = useParams();
  // async function searchTextQuery(text) {
  //   let category;
  //   let books;
  //   switch (text) {
  //     case "bestsellers":
  //       break;
  //     case "news":
  //       break;
  //     case "free":
  //       break;
  //     case "promotion":
  //       break;
  //     case "hit":
  //       break;
  //   }
  // }
  // let { searchText } = useParams();

  useEffect(() => {
    console.log(searchText);
    axios.get(`http://localhost:3000/api/book/customer/hit`).then((res) => {
      setBooksData(res.data);
    });
  }, []);
  return (
    <div>
      <NavGroup />
      {booksData &&
        booksData.map((data) => (
          <BookShowArea key={data.label} label={data.label}>
            {data.books
              ? data.books.map((book) => (
                  <BookList
                    key={book.id}
                    name={book.name}
                    author={book.author.name}
                    desc={book.description}
                    cost={book.cost}
                    rating={book.rating}
                  />
                ))
              : "ไม่มีรายการ"}
          </BookShowArea>
        ))}
    </div>
  );
}
