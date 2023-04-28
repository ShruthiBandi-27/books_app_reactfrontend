import React from 'react';
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { useState } from "react";

export default function Counter() {
    const [like, setLike] = useState(0);
    const [dislike, setdisLike] = useState(0);
  return (
    <div>
        <IconButton color="primary" arial-label="like-btn" onClick={() => setLike(like + 1) }>
            <Badge badgeContent={like} >👍</Badge>
        </IconButton>
        <IconButton color="error" arial-label="dislike-btn" onClick={() => setdisLike(dislike + 1) }>
            <Badge badgeContent={dislike}>👎</Badge>
        </IconButton>
    </div>
  )
}
