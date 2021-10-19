import { useEffect, useState } from "react";

const useService = () => {
    const [serve, setServe] = useState([]);

    useEffect(() => {
        fetch('/servicesData.json')
            .then(res => res.json())
            .then(data => setServe(data))
    }, [])
    return [serve, setServe];

}

export default useService;

