import React, { useState } from 'react';
import { FormData } from '../../types/form';
import BasicDataSection from './BasicDataSection';
import ObjectiveSection from './ObjectiveSection';
import ActivityLevelSection from './ActivityLevelSection';
import DietaryPreferencesSection from './DietaryPreferencesSection';
import BiotipoSection from './BiotipoSection';
import '../../styles/components.css';

interface PlanFormProps {
  onSubmit: (data: FormData) => void;
}

const PlanForm: React.FC<PlanFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<Partial<FormData>>({
    restricoes: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.idade || !formData.genero || !formData.peso || 
        !formData.altura || !formData.objetivo || !formData.atividade) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    onSubmit(formData as FormData);
  };

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit}>
        <BasicDataSection formData={formData} updateFormData={updateFormData} />
        <ObjectiveSection formData={formData} updateFormData={updateFormData} />
        <ActivityLevelSection formData={formData} updateFormData={updateFormData} />
        <DietaryPreferencesSection formData={formData} updateFormData={updateFormData} />
        <BiotipoSection formData={formData} updateFormData={updateFormData} />
        
        <div className="form-section">
          <div className="checkbox-item">
            <input type="checkbox" id="declaracao" required />
            <label htmlFor="declaracao">
              Declaro que sou saudável e não possuo condições médicas pré-existentes
            </label>
          </div>
        </div>

        <button type="submit" className="generate-btn">
          🚀 Gerar Meu Plano Agora!
        </button>
      </form>
    </div>
  );
};

export default PlanForm;