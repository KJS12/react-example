import { useEffect, useState } from "react";

export const useFetch = (baseUrl, initialValue) => {

    const [data, setData] = useState(null);

    const fetchUrl = (type) => {
        fetch(`${baseUrl}/${type}`)
        .then((res) => res.json())
        .then((res) => setData(res))
    }

    useEffect(() => {
        fetchUrl(initialValue);
    }, [])

    return { data, fetchUrl }
}