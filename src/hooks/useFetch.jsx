import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network error");

        const json = await res.json();   
        console.log("Fetched data:", json);

        if (alive) setData(json);
      } catch (err) {
        if (alive) setError(err.message);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => { alive = false };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
