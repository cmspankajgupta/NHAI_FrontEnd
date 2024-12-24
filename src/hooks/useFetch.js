import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, clearData } from "../store/fetchSlice";

const useFetch = (url, autoFetch = true) => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.fetch);

    useEffect(() => {
        if (autoFetch) {
            dispatch(fetchData(url));
        }
        return () => {
            dispatch(clearData());
        };
    }, [dispatch, url, autoFetch]);

    const refetch = () => {
        dispatch(fetchData(url));
    };

    return { data, loading, error, refetch };
};

export default useFetch;
