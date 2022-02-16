import "./search-input.scss";
const SearchInput = ({ search, setSearch }) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Votre recherche..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  );
};

export default SearchInput;
