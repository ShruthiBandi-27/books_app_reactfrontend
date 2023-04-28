import React from "react";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Counter from "./Counter";


export default function Book({ book, id, handleDelete}) {
  const nav = useNavigate();
  const [show, setShow] = useState(true);

  return (
    <div className="book-container">
      <img className="book-poster" src={book.poster} alt={book.name} />
      <div className="book-spec">
        <h2 className="book-name">
          {book.name} - {id}
        </h2>
        <p className="book-rating">⭐{book.rating}</p>
      </div>
      <IconButton
        color="secondary"
        arial-label="expand"
        onClick={() => setShow(!show)}
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      <IconButton
        color="secondary"
        arial-label="info"
        onClick={() => nav("/books/" + id)}
      >
        <InfoIcon></InfoIcon>
      </IconButton>
      {show ? <p>{book.summary}</p> : null}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Counter />

          {/* Deleting book */}
          <IconButton
            color="error"
            arial-label="info"
            onClick={() => handleDelete(id)}
          >
          <DeleteIcon></DeleteIcon>
          </IconButton>

          {/* Editing book */}
          <IconButton
            color="success"
            arial-label="info"
            onClick={() => nav("/books/edit/" + id)}
          >
          <EditIcon></EditIcon>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
