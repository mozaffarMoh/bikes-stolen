import "./SearchForBikes.css";

const SearchForBikes = ({ setTitle, setIsSearchStarted }: any) => {
  const handleSearch = () => {
    setIsSearchStarted(true);
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
