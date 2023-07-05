import { useContext } from "react";
import movieContext from "../Context/moviecontext";

const Search = () => {
  const { query, setQuery } = useContext(movieContext);
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter movie name..."
      />
    </div>
  );
};

export default Search;
