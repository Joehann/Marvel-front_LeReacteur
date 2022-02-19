import { useState, useEffect } from "react";
import { fetchData } from "../functions/fetchData";
import Content from "../components/List/Content/Content";
import StartPage from "../components/StartPage/StartPage";

const Home = ({ search, setSearch, setIsStarted, isStarted }) => {
  const [characters, setCharacters] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (isStarted) {
      fetchData(
        `https://marvel-react-app-jp.herokuapp.com/characters?name=${search}&page=${page}`,
        setCharacters,
        setIsLoading
      );
    }
  }, [search, page, isStarted]);
  return isStarted ? (
    isLoading ? (
      <span>En chargement</span>
    ) : (
      <Content
        data={characters}
        page={page}
        setPage={setPage}
        setSearch={setSearch}
        from="home"
        search={search}
      />
    )
  ) : (
    <StartPage setIsStarted={setIsStarted} />
  );
};

export default Home;
