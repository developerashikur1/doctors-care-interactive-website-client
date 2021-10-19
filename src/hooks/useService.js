import { useEffect, useState } from "react";

const useService = () => {
    // hooks
    const [serve, setServe] = useState([]);

    // fetch
    useEffect(() => {
        fetch('/servicesData.json')
            .then(res => res.json())
            .then(data => setServe(data))
    }, [])
    return [serve, setServe];

}

export default useService;

