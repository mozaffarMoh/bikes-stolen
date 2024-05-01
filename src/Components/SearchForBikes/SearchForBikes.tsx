import React from "react";
import "./SearchForBikes.css";

interface SearchForBikesProps {
  title: string;
  firstDate: string;
  secondDate: string;
  setTitle: (title: string) => void;
  setFirstDate: (firstDate: string) => void;
  setSecondDate: (secondDate: string) => void;
  setCurrentPage: (currentPage: number) => void;
  setIsSearchStarted: (isSearchStarted: boolean) => void;
  setIsPaginationNavigate: (isPaginationNavigate: boolean) => void;
  getFilteredData: () => void;
}

const SearchForBikes: React.FC<SearchForBikesProps> = ({
  title,
  firstDate,
  secondDate,
  setTitle,
  setFirstDate,
  setSecondDate,
  setCurrentPage,
  setIsSearchStarted,
  getFilteredData,
  setIsPaginationNavigate,
}) => {
  /* Start search */
  const handleSearch = () => {
    setCurrentPage(1);
    setIsPaginationNavigate(true);
    setIsSearchStarted(true);
    getFilteredData();
  };

  /* Reset to default */
  const handleReset = () => {
    setTitle("");
    setFirstDate("");
    setSecondDate("");
    setCurrentPage(1);
    getFilteredData();
  };

  return (
    <div className="search-for-bikes">
      <div className="search-for-bikes-items flexCenter">
        <div className="search-for-bikes-item flexCenterColumn">
          <h3>Search By Title &nbsp; </h3>
          <input
            type="text"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </div>

        <div className="search-for-bikes-item flexCenterColumn ">
          <h3>Search By Date Range &nbsp;</h3>
          <div>
            <p>From</p>
            <input
              type="date"
              className="date-input"
              value={firstDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFirstDate(e.target.value)
              }
            />
            <p>To</p>
            <input
              type="date"
              className="date-input"
              value={secondDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSecondDate(e.target.value)
              }
            />
          </div>
        </div>
      </div>
      <div className="flexCenterColumn">
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleReset} className="reset-button">
          Reset
        </button>
      </div>
    </div>
  );
};

export default SearchForBikes;
