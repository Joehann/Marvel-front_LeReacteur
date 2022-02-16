import "./content.scss";
import Card from "../../Card/Card";
const Content = ({ data }) => {
  console.log(data);
  return (
    <div className="content">
      {data.results.map((element, index) => {
        return <Card key={index} data={element} />;
      })}
    </div>
  );
};

export default Content;
