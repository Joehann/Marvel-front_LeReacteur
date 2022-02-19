import "./card.scss";
import Favorite from "../../../assets/img/favorite.svg";
import DefaultImg from "../../../assets/img/default_image.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Card = ({ data, from }) => {
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem(`Comics-${data._id}` || null)
  );

  //Manage Favorites
  const isAlreadyInFavorites = localStorage.getItem(`Comics-${data._id}`);
  //Add/remove from comics from favorites
  const addComicsInFavorites = (comicsId) => {
    if (!isAlreadyInFavorites) {
      localStorage.setItem(`Comics-${comicsId}`, `Comics-${comicsId}`);
      setIsFavorite(localStorage.getItem(`Comics-${data._id}`));
    } else {
      localStorage.removeItem(`Comics-${comicsId}`);
      setIsFavorite(null);
    }
  };

  //set image path

  const imgPath = data.thumbnail.path + "." + data.thumbnail.extension;

  return (
    <Link to={from === "home" ? `/character/${data._id}` : "#"} data={data}>
      <div className="card" onClick={() => addComicsInFavorites(data._id)}>
        <div className="card-content">
          {data.name && <div className="card-header">{data.name}</div>}
          {data.title && <div className="card-header">{data.title}</div>}
          <div
            className="card-body"
            style={
              !data.thumbnail.path.includes("image_not_available")
                ? { backgroundImage: `url(${imgPath})` }
                : { backgroundImage: `url(${DefaultImg})` }
            }
          ></div>
          <div className="card-footer">{data.description}</div>
        </div>
        {from === "comics" && isFavorite && (
          <img
            className="favorite-svg"
            src={Favorite}
            alt="favorite"
            info="add to favorites"
          />
        )}
      </div>
    </Link>
  );
};

export default Card;
