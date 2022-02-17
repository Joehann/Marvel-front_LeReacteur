import "./search-input.scss";
const SearchInput = ({ search, setSearch }) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Votre recherche..."
      onChange={(event) =>
        event.target.value.length >= 3 && setSearch(event.target.value)
      }
    />
  );
};

export default SearchInput;
