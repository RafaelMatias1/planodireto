import React from 'react';
import { FormData } from '../../types/form';

interface DietaryPreferencesSectionProps {
  formData: Partial<FormData>;
  updateFormData: (updates: Partial<FormData>) => void;
}

const DietaryPreferencesSection: React.FC<DietaryPreferencesSectionProps> = ({ formData, updateFormData }) => {
  const handleRestricoesChange = (restricao: string, checked: boolean) => {
    const currentRestricoes = formData.restricoes || [];
    let newRestricoes;
    
    if (checked) {
      newRestricoes = [...currentRestricoes, restricao];
    } else {
      newRestricoes = currentRestricoes.filter(r => r !== restricao);
    }
    
    updateFormData({ restricoes: newRestricoes });
  };

  return (
    <div className="form-section">
      <h3>🥗 Preferências Alimentares</h3>
      <div className="checkbox-group">
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="vegetariano"
            checked={formData.restricoes?.includes('vegetariano') || false}
            onChange={(e) => handleRestricoesChange('vegetariano', e.target.checked)}
          />
          <label htmlFor="vegetariano">Vegetariano</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="vegano"
            checked={formData.restricoes?.includes('vegano') || false}
            onChange={(e) => handleRestricoesChange('vegano', e.target.checked)}
          />
          <label htmlFor="vegano">Vegano</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="lactose"
            checked={formData.restricoes?.includes('lactose') || false}
            onChange={(e) => handleRestricoesChange('lactose', e.target.checked)}
          />
          <label htmlFor="lactose">Sem Lactose</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="gluten"
            checked={formData.restricoes?.includes('gluten') || false}
            onChange={(e) => handleRestricoesChange('gluten', e.target.checked)}
          />
          <label htmlFor="gluten">Sem Glúten</label>
        </div>
      </div>
    </div>
  );
};

export default DietaryPreferencesSection;
