import { useState, useEffect } from "react";

const useFetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('feature.json')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return [data];
};

export default useFetchData;