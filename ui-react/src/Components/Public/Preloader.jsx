import React, { useEffect, useState } from 'react';
import '../../assets/css/Preloader.css';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 3);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="preloader-container">
      <div className="loading-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Preloader;
