import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../functions/fetchData";
import Content from "../components/Unique/Content/Content";
const Character = () => {
  const { characterId } = useParams();
  console.log(characterId);

  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(
      `https://marvel-react-backend.herokuapp.com/personnage/comics/${characterId}`,
      setCharacter,
      setIsLoading
    );
  }, [characterId]);

  return isLoading ? <span>en chargement</span> : <Content data={character} />;
};

export default Character;
