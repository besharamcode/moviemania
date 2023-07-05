import movieContext from "../Context/moviecontext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie } = useContext(movieContext);
  console.log(movie)
  return (
    <>
      <section>
        <div className="card-container">
          {movie.map((curnmovie) => {
            const { Title, Poster, Year } = curnmovie
            console.log(Title.length)
            return (
              <NavLink className={"card-link"} key={curnmovie.imdbID} to={`/movie/${curnmovie.imdbID}`}>
                <div className="card">
                  <h2 className="movies-name">{Title.length > "20" ? `${Title.substring(15,-1)}...` : `${Title}`}</h2>
                  <img src={Poster} alt="Unavailible" />
                  <p className="info-year">{Year}</p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section >
    </>
  );
};

export default Movies;
