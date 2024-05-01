import "./BikesStolenInMunich.css";
import React, { useState, useEffect } from "react";
import {
  BikesFiltered,
  ErrorNotify,
  Loading,
  Pagination,
  SearchForBikes,
} from "../../Components";
import useGet from "../../Custom-hooks/useGet";
import { endPoint } from "../../environment";
import { ParamsObjTypes } from "../../DTOs/DTOs";

const BikesStolenInMunich: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [title, setTitle] = useState<string>("");
  const [firstDate, setFirstDate] = React.useState<string>("");
  const [secondDate, setSecondDate] = React.useState<string>("");
  const [paramsObj, setParamsObj] = useState<ParamsObjTypes>({
    page: currentPage,
    per_page: 10,
    title: title,
  });

  const [allData] = useGet(endPoint.search, null);
  const [filteredData, loading, getFilteredData, success, errorMessage] =
    useGet(endPoint.search, paramsObj);

  /* Update params */
  useEffect(() => {
    setParamsObj({
      page: currentPage,
      per_page: 10,
      title: title,
    });
  }, [currentPage, title]);

  /* Get data when update params */
  useEffect(() => {
    if (!title) {
      getFilteredData();
    }
  }, [paramsObj]);

  return (
    <div className="bikes-stolen-in-munich flexCenterColumn">
      {loading && <Loading />}
      {errorMessage && <ErrorNotify message={errorMessage} />}
      <h1>BIKES STOLEN IN MUNICH</h1>
      <SearchForBikes
        title={title}
        firstDate={firstDate}
        secondDate={secondDate}
        setTitle={setTitle}
        setFirstDate={setFirstDate}
        setSecondDate={setSecondDate}
        getFilteredData={getFilteredData}
      />

      <Pagination
        allData={allData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <BikesFiltered
        filteredData={filteredData}
        success={success}
        firstDate={firstDate}
        secondDate={secondDate}
      />
    </div>
  );
};

export default BikesStolenInMunich;
