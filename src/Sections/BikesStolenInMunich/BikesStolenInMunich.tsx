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
  const [paramsObj, setParamsObj] = useState<ParamsObjTypes>({
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
      getDataFiltered();
    }
  }, [paramsObj]);

  return (
    <div className="bikes-stolen-in-munich flexCenterColumn">
      {loading && <Loading />}
      {errorMessage && <ErrorNotify message={errorMessage} />}
      <h1>Bikes stolen in Munich</h1>
      <SearchForBikes setTitle={setTitle} getDataFiltered={getDataFiltered} />

      <Pagination
        allData={allData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <BikesFiltered dataPerPage={dataFiltered} success={success} />
    </div>
  );
};

export default BikesStolenInMunich;
