// 실시간 센서값 가져오기, pollingInterval, threshold 설정 필요
import { useState, useEffect, useCallback, useMemo } from "react";
function useSensorMonitor(warningNotification, pollingInterval = 5000) {
  const [sensorData, setSensorData] = useState(null);
  const [loading, setLoading] = useState(true);

  const sensors = useMemo(() => [
    { key: 'temperature', label: '온도', unit: '°C', url: '', threshold: '' },
    { key: 'humidity', label: '습도', unit: '%', url: '', threshold: '' },
    { key: 'co2', label: '이산화탄소 농도', unit: 'ppm', url: '', threshold:'' },
    { key: 'light', label: '조도', unit: 'Lux', url: '', threshold: '' },
  ], []);

  const fetchAllSensorData = useCallback(async () => {
    try {
      const results = await Promise.all(
        sensors.map(async (sensor) => {
          const response = await fetch(sensor.url); //센서 api 삽입
          const data = await response.json();
          const value = data.value;

          if (value > sensor.threshold) {
            warningNotification(`${sensor.label} 임계치 초과`, {
              body: `현재 ${sensor.label}는 ${value}${sensor.unit}입니다.`,
            });
          }

          return { [sensor.key]: value };
        })
      );
      const mergedData = Object.assign({}, ...results);
      setSensorData(mergedData);
    } catch (error) {
      console.error("센서 데이터 불러오기 실패:", error);
    } finally {
      setLoading(false); 
    }
  }, [sensors, warningNotification]);
  
  //마운트할 떄 데이터 fetch와 pollingInterval 간격으로 데이터 재요청
  useEffect(() => {
    fetchAllSensorData();
    const interval = setInterval(fetchAllSensorData, pollingInterval);
    return () => clearInterval(interval);
  }, [fetchAllSensorData, pollingInterval]);

  return { sensorData, loading };
}

export default useSensorMonitor;
