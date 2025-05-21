import React from "react";
import "./SettingAccount.css";
import Settingbar from "../components/Settingbar";
import syncIcon from "../icons/lucide/sync.svg";
const accounts = [
  {
    email: "asap@gmail.com",
    date: "2025-04-04",
    role: "관리자",
    active: true,
  },
];

const SettingAccount = () => (
  <div className="settingbar-row">
  <Settingbar />
  <div className="accountCard">
    <div className="accountHeader">
      <span className="accountTitle">계정 관리</span>
      <div className="accountActions">
        <button className="accountAdd">계정 등록</button>
        <button className="accountDelete">삭제</button>
        <button className="accountSync">
          <img src={syncIcon} alt="sync"className="synoIcon" />
        </button>
      </div>
    </div>
    <table className="accountTable">
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th>계정</th>
          <th>등록일</th>
          <th>권한</th>
          <th>활성화</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((acc) => (
          <tr key={acc.email}>
            <td><input type="checkbox" /></td>
            <td>{acc.email}</td>
            <td>{acc.date}</td>
            <td>{acc.role}</td>
            <td>
              {acc.active ? (
                <span className="accountActive">
                  <span className="dot" /> 활성화
                </span>
              ) : (
                <span className="accountInactive">
                  <span className="dotInactive" /> 비활성화
                </span>
              )}
            </td>
          </tr>
        ))}
        
        {Array.from({ length: 7 - accounts.length }).map((_, i) => (
          <tr key={`empty-${i}`}>
            <td><input type="checkbox" disabled /></td>
            <td colSpan={4}></td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="accountPagination">&lt;&lt; &lt; 1 / 5 &gt; &gt;&gt;</div>
  </div>
  </div>
);

export default SettingAccount;
