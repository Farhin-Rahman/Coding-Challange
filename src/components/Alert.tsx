import React from 'react';

interface AlertProps {
  type: string;
  title: string;
  description: string;
}

const Alert: React.FC<AlertProps> = ({ type, title, description }) => {
  return (
    <div className={`alert alert-${type}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Alert;
