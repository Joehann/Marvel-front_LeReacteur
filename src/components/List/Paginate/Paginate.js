import "./paginate.scss";
const Paginate = ({ page, setPage, numberOfPages }) => {
  return (
    <div className="paginate">
      <button
        disabled={page <= 1 ? true : false}
        onClick={() => setPage(page - 1)}
      >
        Prev.
      </button>
      <div>
        {page} / {numberOfPages}
      </div>
      <button
        disabled={page >= numberOfPages ? true : false}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Paginate;
