import "./content.scss";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
const Content = ({ data, page, setPage }) => {
  // console.log(data);
  let numberOfPages = Math.floor(data.count / 100);
  data.count % 100 > 0 && numberOfPages++;
  return (
    <>
      <div className="content">
        {data.results.map((element, index) => {
          return <Card key={index} data={element} />;
        })}
      </div>
      <Paginate page={page} numberOfPages={numberOfPages} setPage={setPage} />
    </>
  );
};

export default Content;
