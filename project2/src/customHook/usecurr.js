import { useEffect,useEffect } from "react";
import { useState } from 'react'

function usecurr(currency){
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/adb2a9930a6f56990378dfba/latest/USD ${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
           console.log(res[currency])
    }, [currency]);
    return data;
}
export default usecurr; 