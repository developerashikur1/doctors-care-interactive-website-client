const { useState, useEffect } = require("react")

const useServiceAll = () => {
    const [healthCare, setHealthCare] = useState([]);

    useEffect(() => {
        fetch('/servicesAll.json')
            .then(res => res.json())
            .then(data => setHealthCare(data))
    }, [])
    return [healthCare, setHealthCare]
}


export default useServiceAll;