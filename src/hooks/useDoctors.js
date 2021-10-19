import { useEffect, useState } from "react"

const useDoctors = () => {
    // hooks
    const [doctors, setDoctors] = useState([]);

    // fake data
    useEffect(() => {
        fetch("/doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return [doctors]
}

export default useDoctors;