import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {API} from './global.js';

export default function BookDetail() {

  const [book, setBook] = useState({});
  const { bookid } = useParams();

  useEffect(() => {
    fetch(`${API}/books/${bookid}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((bk) => setBook(bk));
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <iframe
        width="100%"
        height="550"
        src={book.trailer}
        title="The Secret Full Movie In English Law Of Attraction Full HD Original  Full Uncut Movie  Secret 2020"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="book-detail-container">
        <div className="book-spec">
          <h2 className="book-name">{book.name}</h2>
          <p className="book-rating">⭐{book.rating}</p>
        </div>
        <p className="book-summary">{book.summary}</p>
        <Button
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
          onClick={() => navigate(-1)}
        >
          BACK
        </Button>
      </div>
    </div>
  )
}
