import Content from "../components/List/Content/Content";
import { useState } from "react";
const Favorites = ({ favoritesCharacters, setSearch }) => {
  const data = {
    count: favoritesCharacters.length,
    limit: 100,
    results: favoritesCharacters,
  };
  const [page, setPage] = useState(1);
  return (
    <Content
      data={data}
      page={page}
      setPage={setPage}
      setSearch={setSearch}
      from="characters"
      favorites={true}
    />
  );
};
export default Favorites;
