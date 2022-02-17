import { useState, useEffect } from "react";
import { fetchData } from "../functions/fetchData";
import Content from "../components/List/Content/Content";

const Home = ({ search }) => {
  const [characters, setCharacters] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(
      `http://localhost:4000/characters?name=${search}&page=${page}`,
      setCharacters,
      setIsLoading
    );
  }, [search, page]);
  return isLoading ? (
    <span>en chargement</span>
  ) : (
    <Content data={characters} page={page} setPage={setPage} />
  );
};

export default Home;
