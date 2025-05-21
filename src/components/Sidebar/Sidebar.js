import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import logoutIcon from '../../icons/lucide/logoutButton.svg'; // 변수명 수정 완료
import Clock from '../Clock';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // 로그인 페이지로 이동
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <ul>
          <li>
            <Link to="/DashBoard">실시간 대시보드</Link>
          </li>
          <li>
            <Link to="/DataStatistics">데이터 통계</Link>
          </li>
          <li>
            <Link to="/chat">챗봇</Link>
          </li>
          <li>
            <Link to="/Setting">설정</Link>
          </li>
          <li className="clock-item">
            <Clock />
          </li>
          <li>
            <div className="logoutbutton" onClick={handleLogout}>
              <img alt="logout icon" src={logoutIcon} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
