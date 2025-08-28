import React from 'react';

interface CaloriesDisplayProps {
  calorias: number;
}

const CaloriesDisplay: React.FC<CaloriesDisplayProps> = ({ calorias }) => {
  return (
    <div className="calories-display">
      <h3>Meta Diária</h3>
      <div style={{ fontSize: '2em', fontWeight: 'bold' }}>
        {calorias} kcal
      </div>
    </div>
  );
};

export default CaloriesDisplay;