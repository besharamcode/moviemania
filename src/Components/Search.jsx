import { useContext } from "react";
import movieContext from "../Context/moviecontext";

const Search = () => {
  const { query, setQuery } = useContext(movieContext);
  return (
    <div className="search-bar">
      <form onSubmit={(e) => e.preventDefault} action="#">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter movie name..."
      />
      </form>
    </div>
  );
};

export default Search;
