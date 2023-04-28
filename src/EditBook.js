import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {API} from './global.js';

export default function EditBook() {
    const { bookid } = useParams();
    const [book, setBook] = useState(null);
  
    useEffect(() => {
      fetch(`${API}/books/${bookid}`, {
        method: "GET",
      })
        .then((data) => data.json())
        .then((bk) => setBook(bk));
    }, []);
  
    //console.log(book.name);
  
    return book ? <EditBookForm book={book} /> : "Loading...";
  }

export function EditBookForm({book}) {
    const [name, setName] = useState(book.name);
    const [poster, setPoster] = useState(book.poster);
    const [rating, setRating] = useState(book.rating);
    const [summary, setSummary] = useState(book.summary);
    const [trailer, setTrailer] = useState(book.trailer);

    const navigate = useNavigate();

  return (
    <div>
       <h2 style={{textAlign:"center"}}>Update Book</h2>
    <div className="add-book-form">
    
         <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
      />

      {/* copy the bookList and add newBook */}

      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          const updatedBook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          fetch(`${API}/books/${book.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedBook),
          })
            .then((data) => data.json())
            .then(() => navigate("/"));
        }}
      >
        SAVE
      </Button>
    </div>
    </div>
  )
}
