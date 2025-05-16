import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChevronDown1 from '../../../../icons/ChevronDown1/ChevronDown1';
import SendIcon from '../../../../icons/AiButton.svg'; // ✅ AiButton.svg import 추가
import './style.css';

const Ai = () => {
  const [command, setCommand] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('적상추');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const crops = ['적상추', '청상추', '꽃상추', '시금치', '배추'];

  const goToChatPage = () => {
    if (command.trim() !== '') {
      navigate('/chat', { state: { userCommand: command } });
    }
  };

  return (
    <div className="AI">
      <div
        className="select-vege"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <div className="dropdown-selected">
          {selectedCrop}
          <ChevronDown1 className="chevron-down" />
        </div>
        {dropdownOpen && (
          <ul className="dropdown-menu">
            {crops.map((crop) => (
              <li
                key={crop}
                onClick={() => {
                  setSelectedCrop(crop);
                  setDropdownOpen(false);
                }}
              >
                {crop}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="command-input-wrapper">
        <input
          type="text"
          className="command-input-box"
          placeholder="‘관수 펌프를 제어해줘’와 같은 명령어를 입력하세요."
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && goToChatPage()}
        />
        <img
          className="send-button"
          src={SendIcon} // ✅ AiButton.svg 사용
          alt="send"
          onClick={goToChatPage}
          style={{
            cursor: 'pointer',
            width: '28px',
            height: '28px',
            marginLeft: '10px',
          }}
        />
      </div>
    </div>
  );
};

export default Ai;
