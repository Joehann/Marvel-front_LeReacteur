import { useState, useEffect } from "react";
import { fetchData } from "../functions/fetchData";
import Content from "../components/shared/Content/Content";

const Comics = () => {
  const [comics, setComics] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData("http://localhost:4000/comics", setComics, setIsLoading);
  }, []);
  return isLoading ? <span>en chargement</span> : <Content data={comics} />;
};

export default Comics;
