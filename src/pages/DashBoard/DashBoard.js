import React from 'react';
import Sensor from '../../components/DashBoardSection/Sensor';
import Actuator from '../../components/DashBoardSection/Actuator';
import Weather from '../../components/DashBoardSection/Weather';
import UsageStatus from '../../components/DashBoardSection/UseStatus';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './style.css';

const DashBoard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-main">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="content-layout">
          <div className="bottom-row">
            {/* 왼쪽 열: 센서카드 + 현재기온 */}
            <div className="sensor-weather-column">
              <Sensor />
              <div className="weather-box">
                <Weather />
              </div>
            </div>

            {/* 오른쪽 열: 상태 + 제어 */}
            <div className="side-info">
              <UsageStatus />
              <Actuator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
