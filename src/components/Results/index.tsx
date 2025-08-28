import React from 'react';
import { NutritionPlan, FormData } from '../../types/form';
import CaloriesDisplay from './CaloriesDisplay';
import MacrosGrid from './MacrosGrid';
import MealPlan from './MealPlan';
import Disclaimer from './Disclaimer';
import DownloadButton from './DownloadButton';

interface ResultsProps {
  plan: NutritionPlan;
  formData: FormData;
  onNewPlan: () => void;
}

const Results: React.FC<ResultsProps> = ({ plan, formData, onNewPlan }) => {
  return (
    <div className="results show">
      <div className="plan-header">
        <h2>✨ Seu Plano Personalizado</h2>
        <p>Criado especialmente para você!</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '15px' }}>
          <button 
            onClick={onNewPlan}
            style={{
              padding: '10px 20px',
              background: 'transparent',
              border: '2px solid #667eea',
              borderRadius: '25px',
              color: '#667eea',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            ← Fazer Novo Plano
          </button>
          <DownloadButton plan={plan} formData={formData} />
        </div>
      </div>

      <CaloriesDisplay calorias={plan.calorias} />
      <MacrosGrid macros={plan.macros} />
      <MealPlan cardapio={plan.cardapio} />
      <Disclaimer />
    </div>
  );
};

export default Results;