import "./App.css";
import { useState, } from "react";
import Toolbar from "@mui/material/Toolbar";
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import BookList from "./BookList";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import BookDetail from "./BookDetail";
import EditBook from "./EditBook";
import AddBook from "./AddBook";

function App() {
  //const [bookList, setBookList] = useState([]);
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
     <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <AppBar color="secondary" position="static">
            <Toolbar>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/books/add">
                AddBook
              </Button>
              <Button
                sx={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} Mode
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books/:bookid" element={<BookDetail/>} />
            <Route path="/books/add" element={<AddBook/>}/>
            <Route path="/books/edit/:bookid" element={<EditBook/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
