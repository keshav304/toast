import React, { useState, useEffect } from 'react';
import './style.css';
interface ToastProps {
  title: string;
  description: string;
  type: 'success' | 'error' | 'info';
  onConfirm: () => void;
}

const Toast: React.FC<ToastProps> = ({ title, description, type, onConfirm }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (title && description) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Toast will disappear after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [title, description]);

  return isVisible ? (
    <div className={`toast ${type}`}>
      <div className="toast-header">
        <div className="toast-icon">
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M8.02025 0.0655323C8.40018 0.215933 8.63047 0.594507 8.58331 0.991141L8.02481 5.68891H13.087C13.435 5.68891 13.7528 5.88159 13.9064 6.18572C14.0599 6.48985 14.0225 6.85251 13.8098 7.1208L7.04654 15.6541C6.79599 15.9702 6.35968 16.0849 5.97975 15.9345C5.59982 15.7841 5.36953 15.4055 5.41668 15.0089L5.97519 10.3111H0.913049C0.564963 10.3111 0.24716 10.1184 0.0936244 9.81428C-0.0599108 9.51015 -0.022463 9.1475 0.19018 8.8792L6.95346 0.345933C7.20401 0.0298157 7.64032 -0.0848683 8.02025 0.0655323Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="toast-body">
        <h2 className="toast-title">{title}</h2>
        <p className="toast-description">{description}</p>
        <div className="toast-buttons">
          <button className="confirm" onClick={onConfirm}>
          Confirm
          </button>
          <button className="cancel" onClick={() => setIsVisible(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Toast;
