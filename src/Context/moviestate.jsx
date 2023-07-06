/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import movieContext from "./moviecontext";
const apikey = import.meta.env.VITE_SOME_VALUE;
const apiUrl = ` https://www.omdbapi.com/?&apikey=${apikey}`;

const MovieProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("avengers");

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
        console.log(data.Search)
      } else {
        setIsError({
          show: "true",
          msg: data.error,
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    let searchTime = setTimeout(() => {
      getMovies(`${apiUrl}&s=${query}`);
    },800);
    return () => clearTimeout(searchTime);
  }, [query]);
  return (
    <movieContext.Provider
      value={{ movie, isError, isLoading, query, setQuery }}
    >
      {props.children}
    </movieContext.Provider>
  );
};

export default MovieProvider;
