import { useState, useEffect } from "react";
import { fetchData } from "../functions/fetchData";
import Content from "../components/shared/Content/Content";

const Home = () => {
  const [characters, setCharacters] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData("http://localhost:4000/characters", setCharacters, setIsLoading);
  }, []);
  return isLoading ? <span>en chargement</span> : <Content data={characters} />;
};

export default Home;
