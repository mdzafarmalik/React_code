import { useEffect, useState } from 'react';

function Usecurr(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!baseCurrency) return;

    fetch(`https://v6.exchangerate-api.com/v6/adb2a9930a6f56990378dfba/latest/${baseCurrency}`)
      .then(res => res.json())
      .then(res => {
        setData(res.conversion_rates); // ✅ Access the correct field
        console.log("Fetched exchange rates:", res.conversion_rates);
      })
      .catch(err => {
        console.error("Error fetching currency rates:", err);
      });
  }, [baseCurrency]);

  return data;
}

export default Usecurr;
