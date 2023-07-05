import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import Header from "./Header"
import Footer from "./Footer"


const Movie = () => {
  const { id } = useParams()
  const apikey = import.meta.env.VITE_SOME_VALUE
  const apiUrl = ` http://www.omdbapi.com/?&apikey=${apikey}`;
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", msg: "" })
  const [movie, setMovie] = useState("");
  const { Title, Poster, Released, Runtime, Writer, imdbVotes, imdbRating, Genre, Actors, Awards, Director, Plot } = movie
  const getCurnMovie = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      } else {
        setIsLoading(true)
        setIsError({
          show: "true",
          msg: `Sorry This Movie Id ${id} Data Not Found!`
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurnMovie(`${apiUrl}&i=${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Header />
      <main className="">
        <section className="" >
          <p>{isError.show === "true" ? isError.msg : isError.show === "false"}</p>
          <div className="movie-container">
            <div className="poster">
              <img src={Poster} alt="" />
            </div>
            <div className="movie-info">
              <h2 className=" movie-name">{Title}</h2>
              <p className="plot mb">{Plot}</p>
              <p className="writer">Writer : {Writer}</p>
              <p className="director">Director : {Director}</p>
              <p className="awards">Awards : {Awards}</p>
              <p className="actors">Actors : {Actors}</p>
              <p className="released">Released : {Released}</p>
              <p className="runtime">Runtime : {Runtime}</p>
              <p className="genre">Genre : {Genre}</p>
              <p className="imdb-ratings">IMDB Ratings : {imdbRating}</p>
              <p className="imdb-votes">IMDB Votes : {imdbVotes}</p>
            </div>
          </div>
        </section >
      </main >
      <Footer />
    </>
  )
}
export default Movie