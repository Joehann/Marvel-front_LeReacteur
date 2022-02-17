import { useState, useEffect } from "react";
import { fetchData } from "../functions/fetchData";
import Content from "../components/List/Content/Content";

const Comics = ({ search }) => {
  const [comics, setComics] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData(
      `http://localhost:4000/comics?title=${search}&page=${page}`,
      setComics,
      setIsLoading
    );
  }, [search, page]);
  return isLoading ? (
    <span>en chargement</span>
  ) : (
    <Content data={comics} page={page} setPage={setPage} />
  );
};

export default Comics;
