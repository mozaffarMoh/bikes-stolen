import React from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { config } from "../environment";
import { Bike } from "../DTOs/DTOs";

interface ParamObj {
    page: number;
    per_page: number;
    title?: string;
}

type ApiResponse = AxiosResponse<{ bikes: Bike[] }> | undefined;
type ApiError = AxiosError<{ err: string; error?: string }> | undefined;
type UseGetData<T> = [T[], boolean, () => void, boolean, string];

const useGet = (endPoint: string, paramObj: ParamObj | null): UseGetData<Bike> => {
    const [data, setData] = React.useState<Bike[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
    const [errorMessage, setErrorMessage] = React.useState<string>("");
    let paramsFilterdBikes: string = `?page=${paramObj?.page}&per_page=${paramObj?.per_page}&query=${paramObj?.title ? paramObj.title : ''}&location=munich&stolenness=proximity`  //All parameters related to retrieving filtered data
    let paramsAllBikes: string = `?page=1&per_page=100&location=munich&stolenness=proximity` //All parameters related to retrieving all data


    const getData = () => {
        setLoading(true)
        setIsSuccess(false)
        setErrorMessage("")

        axios.get(config.url + endPoint + (!paramObj ? paramsAllBikes : paramsFilterdBikes))
            .then((res: ApiResponse) => {
                setLoading(false)
                setData(res?.data?.bikes || []);
                setIsSuccess(true);
            })
            .catch((err: ApiError) => {
                setLoading(false)
                setErrorMessage(err?.response?.data?.error || "An error occurred")
                setTimeout(() => {
                    setErrorMessage("")
                }, 3000);
            });
    }

    React.useEffect(() => {
        getData()
    }, [])

    return [data, loading, getData, isSuccess, errorMessage];

}

export default useGet;