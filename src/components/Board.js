import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiPhone, FiMoreVertical, FiEdit, FiX, FiCopy } from 'react-icons/fi';
import { CButton, CModal, CModalHeader, CModalBody, CModalFooter } from '@coreui/react';

const Board = ({ title, roomNumber, status, bedType, service }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleOptionClick = (option) => {
    console.log(`${option} clicked`);
    setShowPopup(false);
  };

  return (
    <div className={`board ${status}`}>
      <div className="board-header">
        <h3>{title}</h3>
        <div className="board-icons">
          <FiPhone className="board-icon" />
          <FiMoreVertical
            className="board-icon"
            onClick={togglePopup}
          />
        </div>
      </div>
      <p><strong>Số phòng:</strong> {roomNumber} - {status === 'booked' ? 'Đã đặt' : status === 'pending' ? 'Đang chờ' : 'Đang xử lý'}</p>
      <p>{bedType}</p>
      <p>{service}</p>
      <div className="board-actions">
        <CButton color="primary" className="board-action-btn">
          <FiEdit /> Edit
        </CButton>
        <CButton color="danger" className="board-action-btn">
          <FiX /> Cancel
        </CButton>
        <CButton color="info" className="board-action-btn">
          <FiCopy /> Split
        </CButton>
      </div>
      <CModal 
        show={showPopup} 
        onClose={togglePopup}
        centered
      >
        <CModalHeader closeButton>Tùy chọn</CModalHeader>
        <CModalBody>
          <div className="popup-item" onClick={() => handleOptionClick('Chỉnh sửa phòng')}>
            Chỉnh sửa phòng
          </div>
          <div className="popup-item" onClick={() => handleOptionClick('Thêm dịch vụ')}>
            Thêm dịch vụ
          </div>
          <div className="popup-item" onClick={() => handleOptionClick('Tạm khóa phòng')}>
            Tạm khóa phòng
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={togglePopup}>Close</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
  roomNumber: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['booked', 'pending', 'processing']).isRequired,
  bedType: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
};

export default Board;
