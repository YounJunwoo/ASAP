import React, { useRef } from "react";
import useSensorStatus from "../../hooks/useSensorStatus";
import "./UseStatus.css";

const devices = [
  { name: "관수 펌프", sensorId: "pump" },
  { name: "냉각팬", sensorId: "fan" },
  { name: "창문 모터", sensorId: "window-motor" },
  { name: "LED", sensorId: "led" },
  { name: "온도센서", sensorId: "temp-sensor" },
  { name: "습도센서", sensorId: "humidity-sensor" },
  { name: "CO₂센서", sensorId: "co2-sensor" },
];

const UsageStatus = () => {
  // 각 장치별로 이전 상태를 기억
  const prevStatuses = useRef(Array(devices.length).fill(false));

  // 훅을 컴포넌트 최상위에서 순서대로 호출
  const pump = useSensorStatus("pump");
  const fan = useSensorStatus("fan");
  const motor = useSensorStatus("window-motor");
  const led = useSensorStatus("led");
  const temp = useSensorStatus("temp-sensor");
  const humidity = useSensorStatus("humidity-sensor");
  const co2 = useSensorStatus("co2-sensor");

  const rawStatuses = [pump, fan, motor, led, temp, humidity, co2];

  // 로딩 중이면 이전 상태를 유지
  const statuses = rawStatuses.map((status, idx) => {
    if (!status.loading) {
      prevStatuses.current[idx] = status.isActive;
    }
    return { ...status, isActive: prevStatuses.current[idx] };
  });

  return (
    <div className="usage-status">
      <p className="usage-status-topic">
        <span className="span">제어장치 사용현황</span>
        <span className="text-wrapper-2">&nbsp;</span>
      </p>
      <div className="frame">
        {/* 장치명 컬럼 */}
        <div className="column-text">
          <div className="title-cell" />
          {devices.map((device) => (
            <div className="body-cell" key={device.sensorId}>
              <div className="div">
                <div className="cell-text">{device.name}</div>
              </div>
            </div>
          ))}
        </div>
        {/* 사용여부 컬럼 */}
        <div className="column-text-2">
          <div className="title-cell-2">
            <div className="column-title-wrapper">
              <div className="column-title">기기 사용</div>
            </div>
          </div>
          {statuses.map((status, idx) => (
            <div className="body-cell-2" key={devices[idx].sensorId}>
              {status.isActive ? (
                <div className="used-icon" title="사용" />
              ) : (
                <div className="unused-icon" title="미사용" />
              )}
            </div>
          ))}
        </div>
        {/* 수동/자동 컬럼 */}
        <div className="column-text">
          <div className="title-cell-3">
            <div className="text-wrapper-3">
              <div className="column-title-2">수동/자동</div>
            </div>
          </div>
          {devices.map((_, idx) => (
            <div className="body-cell" key={idx}>
              <div className="div">
                <div className="text-wrapper-5">Cell text</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 아래는 전체 범례(legend)로 남겨둡니다 */}
      <div className="used-icon" />
      <div className="unused-icon" />
      <div className="used">사용</div>
      <div className="unused">미사용</div>
    </div>
  );
};

export default UsageStatus;