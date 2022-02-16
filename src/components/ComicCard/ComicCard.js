import "./comic-card.scss";
const ComicCard = ({ data }) => {
  //   console.log(data);
  const imgPath = data.thumbnail.path + "." + data.thumbnail.extension;

  return (
    <div className="comic-card">
      <div className="card">
        {data.name && <div className="card-header">{data.name}</div>}
        {data.title && <div className="card-header">{data.title}</div>}
        <div className="card-header">{data.title}</div>
        <div
          className="card-body"
          style={{ backgroundImage: `url(${imgPath})` }}
        ></div>
        <div className="card-footer">{data.description}</div>
      </div>
    </div>
  );
};

export default ComicCard;
