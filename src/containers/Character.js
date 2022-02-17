import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../functions/fetchData";
import ContentCharacter from "../components/Unique/Content/ContentCharacter";
const Character = () => {
  const { characterId } = useParams();
  console.log(characterId);

  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(
      `http://localhost:4000/character/${characterId}`,
      setCharacter,
      setIsLoading
    );
  }, [characterId]);

  return isLoading ? (
    <span>en chargement</span>
  ) : (
    <ContentCharacter data={character} />
  );
};

export default Character;
