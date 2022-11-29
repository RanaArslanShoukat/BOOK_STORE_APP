import React, { useEffect, useState } from 'react'
import axios from "axios"
import Book from './Book';


const URL="http://localhost:5000/books";


const fetchBooks = async()=>{
     return await axios.get(URL).then((res)=> res.data)
}

const Books = () => {
  
  const [books,setBooks] = useState();
  useEffect(()=>{

    fetchBooks().then((data)=>setBooks(data.books))

  },[]);
   console.log(books);
  return (
    <div className='container mt-3'>
      <div className='row'>
      {books && books.map((book,i)=>{
        return <div className='col-md-4 my-3 d-flex justify-content-center' key={i}>
           <Book book={book} />
        </div>
      })
      }
      </div>
    </div>
  )
}

export default Books;
