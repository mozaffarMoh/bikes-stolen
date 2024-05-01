import { Bike } from "../../DTOs/DTOs";
import "./Pagination.css";

interface PaginationProps {
  allData: Array<Bike>;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  setIsPaginationNavigate: (isPaginationNavigate: boolean) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  allData,
  currentPage,
  setCurrentPage,
  setIsPaginationNavigate,
}) => {
  /* Define the total number of pages for creating pagination.*/
  let totalPages = Math.ceil(allData?.length / 10);

  /* Change the current page */
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setIsPaginationNavigate(true);
  };

  return (
    <div className="pagination flexCenterColumn">
      <div className="flexCenter">
        {Array.from({ length: totalPages }, (_: any, index: number) => (
          <div
            className={`pagination-item flexCenter ${
              currentPage === index + 1 ? "active" : ""
            }`}
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <p>
        Total theft cases : <span>{allData?.length}</span>
      </p>
    </div>
  );
};

export default Pagination;
