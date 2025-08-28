import React from 'react';
import { FormData } from '../../types/form';

interface BasicDataSectionProps {
  formData: Partial<FormData>;
  updateFormData: (updates: Partial<FormData>) => void;
}

const BasicDataSection: React.FC<BasicDataSectionProps> = ({ formData, updateFormData }) => {
  return (
    <div className="form-section">
      <h3>📋 Dados Básicos</h3>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="idade">Idade (anos)</label>
          <input
            type="number"
            id="idade"
            min="18"
            max="80"
            value={formData.idade || ''}
            onChange={(e) => updateFormData({ idade: parseInt(e.target.value) })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genero">Gênero</label>
          <select
            id="genero"
            value={formData.genero || ''}
            onChange={(e) => updateFormData({ genero: e.target.value as 'masculino' | 'feminino' })}
            required
          >
            <option value="">Selecione</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="peso">Peso (kg)</label>
          <input
            type="number"
            id="peso"
            min="40"
            max="200"
            step="0.1"
            value={formData.peso || ''}
            onChange={(e) => updateFormData({ peso: parseFloat(e.target.value) })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="altura">Altura (cm)</label>
          <input
            type="number"
            id="altura"
            min="140"
            max="220"
            value={formData.altura || ''}
            onChange={(e) => updateFormData({ altura: parseInt(e.target.value) })}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default BasicDataSection;