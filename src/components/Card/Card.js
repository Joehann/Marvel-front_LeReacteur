import "./card.scss";
import DefaultImg from "../../assets/img/default_image.png";
const Card = ({ data }) => {
  // console.log(data);
  const imgPath = data.thumbnail.path + "." + data.thumbnail.extension;

  return (
    <div className="card">
      <div className="card-content">
        {data.name && <div className="card-header">{data.name}</div>}
        {data.title && <div className="card-header">{data.title}</div>}
        <div
          className="card-body"
          style={
            data.thumbnail.path
              ? { backgroundImage: `url(${imgPath})` }
              : { backgroundImage: `url(${DefaultImg})` }
          }
        ></div>
        <div className="card-footer">{data.description}</div>
      </div>
    </div>
  );
};

export default Card;
