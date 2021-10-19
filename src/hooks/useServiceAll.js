const { useState, useEffect } = require("react")

const useServiceAll = () => {
    // hooks
    const [healthCare, setHealthCare] = useState([]);

    // fetch
    useEffect(() => {
        fetch('/servicesAll.json')
            .then(res => res.json())
            .then(data => setHealthCare(data))
    }, [])
    return [healthCare, setHealthCare]
}


export default useServiceAll;