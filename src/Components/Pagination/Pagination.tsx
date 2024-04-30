import "./Pagination.css";

const Pagination = ({
  allData,
  dataPerPage,
  currentPage,
  setCurrentPage,
  isStartedSearch,
}: any) => {
  const totalPages = Math.ceil(allData?.length / 10);
  const totalPagesWhenSearch = Math.ceil(dataPerPage?.length / 10);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pagination flexCenterColumn">
      <div className="flexCenter">
        {Array.from(
          { length: isStartedSearch ? totalPagesWhenSearch : totalPages },
          (_: any, index: number) => (
            <div
              className={`pagination-item flexCenter ${
                currentPage === index + 1 ? "active" : ""
              }`}
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </div>
          )
        )}
      </div>
      <p>
        Total theft cases : <span>{allData.length}</span>
      </p>
    </div>
  );
};

export default Pagination;
