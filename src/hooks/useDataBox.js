//데이터의 평균,최대,최소값 구하기
import { useEffect, useState } from 'react';

function useDataBox(apiUrl) {//api 삽입
  const [data, setData] = useState([]);
  const [average, setAverage] = useState("-");
  const [highest, setHighest] = useState("-");
  const [lowest, setLowest] = useState("-");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch();//apiurl
        const json = await response.json();
        setData(json.data);

        if (json.data && json.data.length > 0) {
          const values = json.data.map((d) => d.y);
          setAverage((values.reduce((a, b) => a + b, 0) / values.length).toFixed(2));
          setHighest(Math.max(...values));
          setLowest(Math.min(...values));
        }
      } catch {
        setAverage("-");
        setHighest("-");
        setLowest("-");
      }
    };

    fetchData();
  }, [apiUrl]); //api 삽입

  return { data, average, highest, lowest };
}

export default useDataBox;
