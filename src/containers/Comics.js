import { useState, useEffect } from "react";
import { fetchData } from "../functions/fetchData";
import Content from "../components/shared/Content/Content";

const Comics = ({ search }) => {
  const [comics, setComics] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData(
      `http://localhost:4000/comics?title=${search}`,
      setComics,
      setIsLoading
    );
  }, [search]);
  return isLoading ? <span>en chargement</span> : <Content data={comics} />;
};

export default Comics;
