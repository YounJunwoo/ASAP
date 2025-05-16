import React from "react";
import "./style.css";

const UsageStatus = () => {
  return (
    <div className="usage-status">
      <p className="usage-status-topic">
        <span className="span">제어장치 사용현황</span>

        <span className="text-wrapper-2">&nbsp;</span>
      </p>

      <div className="frame">
        <div className="column-text">
          <div className="title-cell" />

          <div className="body-cell">
            <div className="div">
              <div className="cell-text">관수 펌프</div>
            </div>
          </div>

          <div className="body-cell">
            <div className="div">
              <div className="cell-text">냉각팬</div>
            </div>
          </div>

          <div className="body-cell">
            <div className="div">
              <div className="cell-text">창문 모터</div>
            </div>
          </div>

          <div className="body-cell">
            <div className="div">
              <div className="cell-text">LED</div>
            </div>
          </div>

          <div className="body-cell">
            <div className="div">
              <div className="cell-text">온도센서</div>
            </div>
          </div>

          <div className="body-cell">
            <div className="div">
              <div className="cell-text">습도센서</div>
            </div>
          </div>

          <div className="body-cell">
            <div className="div">
              <div className="cell-text">CO₂센서</div>
            </div>
          </div>
        </div>

        <div className="column-text-2">
          <div className="title-cell-2">
            <div className="column-title-wrapper">
              <div className="column-title">개체 사용</div>
            </div>
          </div>

          <div className="ellipse-wrapper">
            <div className="ellipse" />
          </div>

          <div className="overlap">
            <div className="ellipse-2" />

            <div className="body-cell-2">
              <div className="ellipse" />
            </div>
          </div>

          <div className="body-cell-3">
            <div className="ellipse-3" />
          </div>

          <div className="body-cell-4">
            <div className="ellipse-4" />
          </div>

          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="ellipse-5" />
            </div>
          </div>

          <div className="body-cell-5">
            <div className="ellipse" />
          </div>

          <div className="body-cell-6">
            <div className="ellipse-6" />
          </div>
        </div>

        <div className="column-text">
          <div className="title-cell-3">
            <div className="text-wrapper-3">
              <div className="column-title-2"> 수동/자동</div>
            </div>
          </div>

          <div className="body-cell">
            <div className="text-wrapper-4" />
          </div>

          <div className="body-cell">
            <div className="div">
              <div className="text-wrapper-5">Cell text</div>
            </div>
          </div>

          <div className="body-cell">
            <div className="div">
              <div className="text-wrapper-5">Cell text</div>
            </div>
          </div>

          <div className="body-cell">
            <div className="div">
              <div className="text-wrapper-5">Cell text</div>
            </div>
          </div>

          <div className="body-cell">
            <div className="div">
              <div className="text-wrapper-5">Cell text</div>
            </div>
          </div>

          <div className="body-cell">
            <div className="div">
              <div className="text-wrapper-5">Cell text</div>
            </div>
          </div>

          <div className="body-cell">
            <div className="div">
              <div className="text-wrapper-5">Cell text</div>
            </div>
          </div>
        </div>
      </div>

      <div className="used-icon" />

      <div className="unused-icon" />

      <div className="used">사용</div>

      <div className="unused">미사용</div>
    </div>
  );
};
export default UsageStatus;
