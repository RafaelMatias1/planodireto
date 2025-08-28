import React from 'react';
import { FormData } from '../../types/form';

interface ActivityLevelSectionProps {
  formData: Partial<FormData>;
  updateFormData: (updates: Partial<FormData>) => void;
}

const ActivityLevelSection: React.FC<ActivityLevelSectionProps> = ({ formData, updateFormData }) => {
  return (
    <div className="form-section">
      <h3>💪 Nível de Atividade Física</h3>
      <select
        value={formData.atividade || ''}
        onChange={(e) => updateFormData({ atividade: parseFloat(e.target.value) })}
        required
      >
        <option value="">Selecione seu nível</option>
        <option value="1.2">Sedentário (trabalho de escritório, pouco exercício)</option>
        <option value="1.375">Levemente Ativo (exercício leve 1-3 dias/semana)</option>
        <option value="1.55">Moderadamente Ativo (exercício moderado 3-5 dias/semana)</option>
        <option value="1.725">Muito Ativo (exercício intenso 6-7 dias/semana)</option>
        <option value="1.9">Extremamente Ativo (trabalho físico + exercício intenso)</option>
      </select>
    </div>
  );
};

export default ActivityLevelSection;