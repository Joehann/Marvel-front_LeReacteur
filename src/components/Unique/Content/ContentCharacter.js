import "./content-character.scss";
import DefaultImg from "../../../assets/img/default_image.png";
import { favoritesManager } from "../../../functions/favoritesManager";
const Content = ({ data, setFavoritesCharacters, favoritesCharacters }) => {
  // console.log(data);
  const imgPath = data.thumbnail.path + "." + data.thumbnail.extension;

  const isFavorite = favoritesCharacters.includes(data._id);

  return (
    <div className="unique-content">
      <div
        className="image"
        style={
          !data.thumbnail.path.includes("image_not_available")
            ? { backgroundImage: `url(${imgPath})` }
            : { backgroundImage: `url(${DefaultImg})` }
        }
      ></div>
      <div className="description">
        <div className="headline">
          <h1>{data.name}</h1>
          <button
            onClick={() =>
              favoritesManager(
                data,
                favoritesCharacters,
                setFavoritesCharacters
              )
            }
          >
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>
        <div className="detail">
          <p>{data.description ? data.description : "No information "}</p>
        </div>
        <div className="comics-list">
          <h2>Is present in :</h2>

          <ul className="detail">
            {data.comics.length > 0
              ? data.comics.map((comic, index) => {
                  return <li key={index}>{comic.title}</li>;
                })
              : "No information"}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
