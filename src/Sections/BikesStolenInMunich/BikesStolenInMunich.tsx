import "./BikesStolenInMunich.css";
import React, { useState } from "react";
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

  /* Get All Bikes stolen */
  const [allData] = useGet(endPoint.search, null);

  /* Get Filtered Bikes stolen */
  const [filteredData, loading, getFilteredData, isSuccess, errorMessage] =
    useGet(endPoint.search, paramsObj);

  /* Update params */
  React.useEffect(() => {
    setParamsObj({
      page: currentPage,
      per_page: 10,
      title: title,
    });
  }, [currentPage, title]);

  /* Get data when update paramsObj */
  React.useEffect(() => {
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
        setCurrentPage={setCurrentPage}
        getFilteredData={getFilteredData}
      />

      <Pagination
        allData={allData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <BikesFiltered
        filteredData={filteredData}
        isSuccess={isSuccess}
        firstDate={firstDate}
        secondDate={secondDate}
      />
    </div>
  );
};

export default BikesStolenInMunich;
