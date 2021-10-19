import "./Styles/PaginationStyle.css";

const Pagination = ({ gamesPerPage, totalGames, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="page_container">
      <ul>
        {pageNumbers.map((number) => (
          <button
            className="page_number"
            onClick={() => paginate(number)}
            key={number}
          >
            <li key={number}>{number}</li>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
