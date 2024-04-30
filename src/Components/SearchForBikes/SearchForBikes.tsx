import "./SearchForBikes.css";

interface SearchForBikesProps {
  setTitle: (title: string) => void;
  getDataFiltered: () => void;
}

const SearchForBikes: React.FC<SearchForBikesProps> = ({
  setTitle,
  getDataFiltered,
}) => {
  const handleSearch = () => {
    getDataFiltered();
  };
  return (
    <div className="search-for-bikes">
      <div className="search-for-bikes-items flexCenter">
        <div className="search-for-bikes-item flexCenterColumn">
          <h3>Search By Title &nbsp; </h3>
          <input type="text" onChange={(e: any) => setTitle(e.target.value)} />
        </div>

        <div className="search-for-bikes-item flexCenterColumn ">
          <h3>Search By Date Range &nbsp;</h3>
          <div>
            <p>From</p>
            <input type="date" className="date-input" />
            <p>To</p>
            <input type="date" className="date-input" />
          </div>
        </div>
      </div>
      <div className="flexCenter">
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchForBikes;
