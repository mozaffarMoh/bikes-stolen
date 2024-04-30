import React from "react";
import axios from "axios";
import { config } from "../environment";

const useGet = (endPoint: string, paramObj: any) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    let params = `?page=${paramObj.page}&per_page=${paramObj.per_page}&query=${paramObj.title ? paramObj.title : ''}&location=munich&stolenness=proximity`

    const getData = () => {
        setLoading(true)
        setSuccess(false)
        setErrorMessage("")

        axios.get(config.url + endPoint + params)
            .then((res) => {
                setLoading(false)
                setData(res?.data?.bikes);
                setSuccess(true);
            })
            .catch((err: any) => {
                setLoading(false)
                setErrorMessage(err.response?.data?.error)
                setTimeout(() => {
                    setErrorMessage("")
                }, 3000);
            });
    }

    React.useEffect(() => {
        getData()
    }, [])

    return [data, loading, getData, success, errorMessage];

}

export default useGet;