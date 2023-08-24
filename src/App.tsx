import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Toast from './components/Toast/index';
import './index.css';

const App: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handleToastConfirm = () => {
    // You can perform your action here or just log to the console
    console.log('Toast confirmed');
    setShowToast(false);
  };

  return (
    <div className="app">
      <div className="content">
        <h1 className="app-title">Toast</h1>
        <p className="app-description">
          Notification message or a piece of information displayed above the page content.
        </p>
        <button className="toast-button" onClick={() => setShowToast(true)}>
          Click me
        </button>
      </div>
      {showToast && (
        <Toast
          title="Toast Title"
          description="Long details go here after the title, long details go here after the title."
          type="info"
          onConfirm={handleToastConfirm}
        />
      )}
    </div>
  );
};

export default App;
