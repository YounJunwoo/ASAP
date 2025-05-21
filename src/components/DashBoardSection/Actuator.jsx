import React from 'react';
import useActuatorControl from '../../hooks/useActuatorControl';
import './Actuator.css';

const Actuator = () => {
  const [isManual, setIsManual] = React.useState(true);

  const pump = useActuatorControl("pump");
  const fan = useActuatorControl("fan");
  const windowMotor = useActuatorControl("window-motor");

  return (
    <div className="actuator">
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

      <div className="pump">
        <div className="pump-text">관수 펌프</div>
        <button
          className={`icon-button ${pump.isOn ? 'on' : 'off'}`}
          onClick={() => isManual && pump.toggleSensor(!pump.isOn)}
          disabled={!isManual || pump.loading}
        >
          {pump.loading ? "..." : pump.isOn ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  );
};

export default Actuator;
