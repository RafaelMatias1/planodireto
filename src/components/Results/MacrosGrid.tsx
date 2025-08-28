import React from 'react';
import { Macros } from '../../types/form';

interface MacrosGridProps {
  macros: Macros;
}

const MacrosGrid: React.FC<MacrosGridProps> = ({ macros }) => {
  return (
    <div className="macros-grid">
      <div className="macro-card">
        <div className="macro-value">{macros.proteinas}</div>
        <div>Proteínas (g)</div>
      </div>
      <div className="macro-card">
        <div className="macro-value">{macros.carboidratos}</div>
        <div>Carboidratos (g)</div>
      </div>
      <div className="macro-card">
        <div className="macro-value">{macros.gorduras}</div>
        <div>Gorduras (g)</div>
      </div>
    </div>
  );
};

export default MacrosGrid;