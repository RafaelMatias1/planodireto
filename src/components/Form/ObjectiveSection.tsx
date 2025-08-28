import React from 'react';
import { FormData } from '../../types/form';

interface ObjectiveSectionProps {
  formData: Partial<FormData>;
  updateFormData: (updates: Partial<FormData>) => void;
}

const ObjectiveSection: React.FC<ObjectiveSectionProps> = ({ formData, updateFormData }) => {
  return (
    <div className="form-section">
      <h3>🎯 Objetivo Principal</h3>
      <select
        value={formData.objetivo || ''}
        onChange={(e) => updateFormData({ objetivo: e.target.value as 'perder' | 'manter' | 'ganhar' })}
        required
      >
        <option value="">Selecione seu objetivo</option>
        <option value="perder">Perder Gordura</option>
        <option value="manter">Manter o Peso</option>
        <option value="ganhar">Ganhar Massa Muscular</option>
      </select>
    </div>
  );
};

export default ObjectiveSection;