import React from 'react';
import './Loader.scss';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;