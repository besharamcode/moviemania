import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import Errorpage from "./Components/Errorpage";
import MovieProvider from "./Context/moviestate";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/:id" element={<Movie/>} />
          <Route path="/*" element={<Errorpage/>} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
