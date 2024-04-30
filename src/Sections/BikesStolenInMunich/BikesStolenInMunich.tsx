import "./BikesStolenInMunich.css";
import {
  BikesFiltered,
  ErrorNotify,
  Loading,
  Pagination,
  SearchForBikes,
} from "../../Components";
import useGet from "../../Custom-hooks/useGet";
import { endPoint } from "../../environment";
import React from "react";

const BikesStolenInMunich = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isSearchStarted, setIsSearchStarted] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [paramsObj, setParamsObj] = React.useState({
    page: currentPage,
    per_page: 10,
    title: title,
  });

  const [allData]: any = useGet(endPoint.search, {
    page: 1,
    per_page: 100,
  });
  const [dataFiltered, loading, getDataFiltered, success, errorMessage]: any =
    useGet(endPoint.search, paramsObj);

  /* Update params */
  React.useEffect(() => {
    setParamsObj({
      page: currentPage,
      per_page: 10,
      title: title,
    });
  }, [currentPage, title]);

  /* Get data when update params */
  React.useEffect(() => {
    getDataFiltered();
  }, [paramsObj || currentPage]);

  /* Get data when update params */
  React.useEffect(() => {
    if (isSearchStarted) {
      getDataFiltered();
    }
  }, [isSearchStarted]);

  return (
    <div className="bikes-stolen-in-munich flexCenterColumn">
      {loading && <Loading />}
      {errorMessage && <ErrorNotify message={errorMessage} />}
      <h1>Bikes stolen in Munich</h1>
      <SearchForBikes
        setTitle={setTitle}
        setIsSearchStarted={setIsSearchStarted}
      />

      <Pagination
        allData={allData}
        dataPerPage={dataFiltered}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isSearchStarted={isSearchStarted}
      />

      <BikesFiltered dataPerPage={dataFiltered} success={success} />
    </div>
  );
};

export default BikesStolenInMunich;
