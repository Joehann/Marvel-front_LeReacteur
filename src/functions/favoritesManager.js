//Manage charactersFavorites

export const favoritesManager = (
  characterId,
  favoritesCharacters,
  setFavoritesCharacters
) => {
  const newArr = [...favoritesCharacters];
  //If Array favoritesCharacters is not existing in localStorage
  if (newArr.length === 0) {
    newArr.push(characterId);
    localStorage.setItem("favoritesCharacters", JSON.stringify(newArr));
  }
  //If Array favoritesCharacters is existing in localStorage
  //If id is already in the favorites characters ==> remove it
  else if (favoritesCharacters.includes(characterId)) {
    const favoriteIndex = newArr.indexOf(characterId);
    newArr.splice(favoriteIndex, 1);
    localStorage.setItem("favoritesCharacters", JSON.stringify(newArr));
  } else {
    newArr.push(characterId);
    localStorage.setItem("favoritesCharacters", JSON.stringify(newArr));
  }
  setFavoritesCharacters(newArr);
};
