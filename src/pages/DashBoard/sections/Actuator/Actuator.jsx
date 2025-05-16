import React, { useState } from 'react';
import OffVariant from '../../../../components/OffVariant/OffVariant'; // ✅ 파일까지 지정

import './style.css';

const Actuator = () => {
  const [isManual, setIsManual] = useState(true);
  const [pumpOn, setPumpOn] = useState(false);
  const [fanOn, setFanOn] = useState(false);
  const [windowOn, setWindowOn] = useState(false);

  return (
    <div className="actuator">
      {/* ✅ 제목 + 스위치 수평 정렬 */}
      <div className="actuator-header">
        <div className="actuator-topic">제어장치 시스템</div>
        <div className="toggle-wrapper">
          <label className="switch">
            <input
              type="checkbox"
              checked={isManual}
              onChange={() => setIsManual(!isManual)}
            />
            <span className="slider" />
          </label>
          <div className="toggle-status-text">
            {isManual ? '수동' : '자동'}
          </div>
        </div>
      </div>

      {/* 관수 펌프 */}
      <div className="pump">
        <div className="pump-text">관수 펌프</div>
        <button
          className={`icon-button ${pumpOn ? 'on' : 'off'}`}
          onClick={() => isManual && setPumpOn(!pumpOn)}
          disabled={!isManual}
        >
          {pumpOn ? 'ON' : 'OFF'}
        </button>
      </div>

      {/* 냉각팬 */}
      <div className="fan">
        <div className="fan-text">냉각팬</div>
        <button
          className={`icon-button ${fanOn ? 'on' : 'off'}`}
          onClick={() => isManual && setFanOn(!fanOn)}
          disabled={!isManual}
        >
          {fanOn ? 'ON' : 'OFF'}
        </button>
      </div>

      {/* 창문 개폐 모터 */}
      <div className="window">
        <div className="window-motor-text">창문 개폐 모터</div>
        <button
          className={`icon-button ${windowOn ? 'on' : 'off'}`}
          onClick={() => isManual && setWindowOn(!windowOn)}
          disabled={!isManual}
        >
          {windowOn ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  );
};
export default Actuator;
