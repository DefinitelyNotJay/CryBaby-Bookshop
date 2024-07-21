import axios from 'axios';
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BookRegisterForm from '../components/book-register-form';

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
    <div className='h-full w-screen p-14'>
      <div className='bg-base rounded-xl p-8'>
      <div className='bg-white rounded-xl p-8'>
        <div className="flex items-center">
          <div className='bg-secondary w-80 h-96'></div>
            <div>
              <h1 className='text-center ml-24 text-3xl mb-6'>{data.name}</h1>
              <BookRegisterForm bookInfo={data}/>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
