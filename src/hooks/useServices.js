import { useEffect } from "react";
import { useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-journey-29953.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.services));
    }, []);
    return [services, setServices];
}

export default useServices;