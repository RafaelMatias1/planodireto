import React from 'react';
import { FormData } from '../../types/form';

interface BiotipoSectionProps {
  formData: Partial<FormData>;
  updateFormData: (updates: Partial<FormData>) => void;
}

const BiotipoSection: React.FC<BiotipoSectionProps> = ({ formData, updateFormData }) => {
  const handleBiotipoSelect = (biotipo: 'ectomorfo' | 'mesomorfo' | 'endomorfo') => {
    updateFormData({ biotipo });
  };

  return (
    <div className="form-section">
      <h3>🏃‍♂️ Biotipo (Opcional)</h3>
      <div className="biotipo-section">
        <div 
          className={`biotipo-card ${formData.biotipo === 'ectomorfo' ? 'selected' : ''}`}
          onClick={() => handleBiotipoSelect('ectomorfo')}
        >
          <img src="/ectomorfo.png" alt="Ectomorfo" style={{ width: '120px', marginBottom: '8px' }} />
          <h4>Ectomorfo</h4>
          <p>Dificuldade em ganhar peso/massa</p>
        </div>
        <div 
          className={`biotipo-card ${formData.biotipo === 'mesomorfo' ? 'selected' : ''}`}
          onClick={() => handleBiotipoSelect('mesomorfo')}
        >
          <img src="/mesomorfo.png" alt="Mesomorfo" style={{ width: '120px', marginBottom: '8px' }} />
          <h4>Mesomorfo</h4>
          <p>Ganha músculo e gordura com facilidade</p>
        </div>
        <div 
          className={`biotipo-card ${formData.biotipo === 'endomorfo' ? 'selected' : ''}`}
          onClick={() => handleBiotipoSelect('endomorfo')}
        >
          <img src="/endomorfo.png" alt="Endomorfo" style={{ width: '120px', marginBottom: '8px' }} />
          <h4>Endomorfo</h4>
          <p>Facilidade em ganhar gordura</p>
        </div>
      </div>
    </div>
  );
};

export default BiotipoSection;