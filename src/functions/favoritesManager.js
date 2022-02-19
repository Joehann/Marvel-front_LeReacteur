//Manage charactersFavorites

export const favoritesManager = (
  characterData,
  favoritesCharacters,
  setFavoritesCharacters
) => {
  console.log(favoritesCharacters);
  const newArr = [...favoritesCharacters];
  //If Array favoritesCharacters is not existing in localStorage
  if (newArr.length === 0) {
    newArr.push(characterData);
    localStorage.setItem("favoritesCharacters", JSON.stringify(newArr));
  }
  //If Array favoritesCharacters is existing in localStorage
  //If id is already in the favorites characters ==> remove it
  else if (favoritesCharacters.includes(characterData)) {
    const favoriteIndex = newArr.indexOf(characterData);
    newArr.splice(favoriteIndex, 1);
    localStorage.setItem("favoritesCharacters", JSON.stringify(newArr));
  } else {
    newArr.push(characterData);
    localStorage.setItem("favoritesCharacters", JSON.stringify(newArr));
  }
  setFavoritesCharacters(newArr);
};
