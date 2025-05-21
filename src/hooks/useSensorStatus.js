//센서 작동 미작동 상태확인
import { useState, useEffect } from 'react';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';
const POLLING_INTERVAL = 5000; // 5초마다 상태 갱신
const useSensorStatus = (sensorId, pollingInterval = POLLING_INTERVAL) => {
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!sensorId) {
      setLoading(false);
      return;
    }

    let isMounted = true;
    let timeoutId = null;

    const fetchSensorStatus = async () => {
      if (!isMounted) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_BASE_URL}/api/sensor/${sensorId}/state`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}` 인증 토큰일 경우
          },
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || `센서 상태 조회 실패 (${response.status}): ${response.statusText}`
          );
        }

        const data = await response.json();

        if (!isMounted) return;

        // 서버 응답에 따라 적절한 필드 사용
        const active = data.isOn ?? data.active ?? data.status === 'active';
        setIsActive(Boolean(active));
      } catch (error) {
        if (!isMounted) return;
        
        console.error('센서 상태 조회 중 오류:', error);
        setError(error.message || '센서 상태를 가져오는 중 오류가 발생했습니다.');
        setIsActive(false);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    // 초기 상태 조회
    fetchSensorStatus();

    // 주기적 상태 갱신 설정
    const scheduleNextFetch = () => {
      timeoutId = setTimeout(() => {
        fetchSensorStatus();
        scheduleNextFetch();
      }, pollingInterval);
    };

    scheduleNextFetch();

    return () => {
      isMounted = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [sensorId, pollingInterval]);

  return { isActive, loading, error };
};

export default useSensorStatus;


/**
 * sensorId에 해당하는 센서의 상태를 API에서 가져와 isActive 상태를 반환하는 훅
 * param {string} sensorId 센서 식별자
 * param {number} [pollingInterval=5000] 상태 갱신 주기 (밀리초)
 * returns {object} { isActive: boolean, loading: boolean, error: string | null }
 * 
 * example
 * const { isActive, loading, error } = useSensorStatus('sensor-123');
 * 
 * API 응답 예시:
 * {
 *   "isOn": true,      // 센서 작동 상태
 *   "lastUpdated": "", // 마지막 상태 업데이트 시간
 *   "battery": 85      // 배터리 잔량 (선택)
 * }
 */