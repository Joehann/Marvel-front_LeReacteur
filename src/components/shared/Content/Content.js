import "./content.scss";
import ComicCard from "../../ComicCard/ComicCard";
const Content = ({ data }) => {
  console.log(data);
  return (
    <div className="content">
      {data.results.map((element, index) => {
        return <ComicCard key={index} data={element} />;
      })}
    </div>
  );
};

export default Content;
