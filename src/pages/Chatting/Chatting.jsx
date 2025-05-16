import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './style.css';
import SendIcon from '../../icons/AiButton.svg'; // 챗봇 아이콘 & 전송 아이콘 공통 사용
import CloseIcon from '../../icons/CloseIcon.svg'; // 닫기 버튼 아이콘

const Chatting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const userCommand = location.state?.userCommand;
  const chatEndRef = useRef(null);

  // ✅ 명령어 전달 시: 자동 등록 + 입력창 비우기
  useEffect(() => {
    if (userCommand) {
      const userMsg = { sender: 'user', text: userCommand };
      const botReply = getBotResponse(userCommand);
      const botMsg = { sender: 'bot', text: botReply };

      setChatHistory([userMsg, botMsg]);
      setMessage(''); // ✅ 입력창 비우기
    }
  }, [userCommand]);

  // ✅ 자동 스크롤
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  // ✅ 챗봇 응답 정의
  const getBotResponse = (msg) => {
    msg = msg.toLowerCase();
    if (msg.includes('안녕') || msg.includes('안녕')) return '안녕하세요.';
    if (msg.includes('기온') || msg.includes('온도'))
      return '현재 기온은 3°C입니다.';
    if (msg.includes('상추') && msg.includes('미래'))
      return '상추의 미래 가격은 상승할 것으로 예측됩니다.';
    if (msg.includes('습도')) return '현재 습도는 60%입니다.';
    return '죄송해요, 이해하지 못했어요.';
  };

  // ✅ 메시지 전송
  const handleSend = () => {
    if (!message.trim()) return;

    const userMsg = { sender: 'user', text: message };
    const botReply = getBotResponse(message);
    const botMsg = { sender: 'bot', text: botReply };

    setChatHistory((prev) => [...prev, userMsg, botMsg]);
    setMessage('');
  };

  return (
    <div className="screen-2">
      <div className="screen-4">
        <button className="button-close" onClick={() => navigate('/dashboard')}>
          <img
            src={CloseIcon}
            alt="close"
            style={{ width: '16px', height: '16px' }}
          />
        </button>

        <div className="chat-area">
          {chatHistory.map((msg, index) =>
            msg.sender === 'user' ? (
              <div className="user-message" key={index}>
                <div className="message-bubble">{msg.text}</div>
              </div>
            ) : (
              <div className="AI-message" key={index}>
                <img className="AI-icon" src={SendIcon} alt="AI" />
                <div className="message-bubble">{msg.text}</div>
              </div>
            )
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="input-area">
          <input
            className="chat-input"
            type="text"
            placeholder="무엇이든 물어보세요"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
          />
          <img
            className="send-icon"
            src={SendIcon}
            alt="send"
            onClick={handleSend}
            style={{
              cursor: 'pointer',
              width: '24px',
              height: '24px',
              marginLeft: '10px',
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Chatting;