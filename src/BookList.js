import React, { useState, useEffect } from 'react';
import Book from './Book';
import axios from "axios";
import {API} from './global.js';

export default function BookList() {
  const [bookList, setBookList] = useState([]);

  const getBooks = () => {
    fetch(`${API}/books`, {
      method: "GET",
    })
    .then((data) => data.json())
    .then((bks) =>{
      setBookList(bks);
      console.log(`booklist: ${bookList}`);
    });
  }
  useEffect(() => getBooks(), []);

  const deleteBook = (id) => {
    axios.delete(`${API}/books/` + id).then((res) => {
      if (res.status === 200) {
        getBooks();
      }
    });

  };
  

  return (
    <div className='book-list'>
      {
        bookList.map((bk, index) => (
          <Book key={index} book={bk} id={bk.id} handleDelete={deleteBook} />
        ))
      }
    </div>
  )
}
