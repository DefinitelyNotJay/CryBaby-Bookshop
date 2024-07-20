import axios from 'axios';
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BookList from '../components/book-list';

export default function Book() {
    const location = useLocation();
    const id = location.pathname.split("/")[2]
    const [data, setData] = useState({})
    async function getBookData(){
        await axios.get(`http://localhost:3000/api/book/${id}`, {withCredentials: true})
        .then(data=>{setData(data.data)})
    }
    useEffect(()=>{
        getBookData()
    }, [])
  return (
    <div>
      {
        data &&
        <BookList name={data.name} author={data.author} cost={data.cost}/>
      }
    </div>
  )
}
