import axios from "axios";
import { useEffect, useState } from "react";
import BookList from "../../components/BookList";
import NavGroup from "../../components/NavGroup";
import BookShowArea from "../../components/BookShowArea";

export default function Home() {
  const [data, setData] = useState([]);

  async function getData() {
    await axios
      .get(`http://localhost:3000/api/book/customer/home`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  useEffect(() => {
    getData();
    // console.log(data)
  }, []);

  return (
    <div>
      <NavGroup setData={setData} />
      <div className="flex flex-col">
        <BookShowArea label={"ขายดี"}>
          {data.bestsellers &&
            data.bestsellers.map((book) => (
              <BookList
                key={book.id}
                name={book.name}
                author={book.author.name}
                desc={book.description}
                cost={book.cost}
                rating={book.rating}
              />
            ))}
        </BookShowArea>
      </div>
      <div className="flex flex-col  pt-6">
        <BookShowArea label="มาใหม่">
          {data.news &&
            data.news.map((book) => (
              <BookList
                key={book.id}
                name={book.name}
                author={book.author.name}
                desc={book.description}
                cost={book.cost}
                rating={book.rating}
              />
            ))}
        </BookShowArea>
      </div>
    </div>
  );
}
