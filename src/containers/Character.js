import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../functions/fetchData";
import ContentCharacter from "../components/Unique/Content/ContentCharacter";
const Character = ({ setFavoritesCharacters, favoritesCharacters }) => {
  const { characterId } = useParams();
  // console.log(characterId);

  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(
      `https://marvel-react-app-jp.herokuapp.com/comics/${characterId}`,
      setCharacter,
      setIsLoading
    );
  }, [characterId]);

  return isLoading ? (
    <span>en chargement</span>
  ) : (
    <ContentCharacter
      data={character}
      setFavoritesCharacters={setFavoritesCharacters}
      favoritesCharacters={favoritesCharacters}
    />
  );
};

export default Character;
