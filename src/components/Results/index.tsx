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
    <>
      {/* Banner lateral esquerdo */}
      <div style={{
        position: 'fixed',
        top: '100px',
        left: 0,
        zIndex: 1000,
        width: '160px',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
      }}>
        {/* Substitua pelo código do AdSense ou imagem/banner */}
        <ins className="adsbygoogle"
          style={{ display: 'block', width: '160px', height: '600px' }}
          data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
          data-ad-slot="1111111111"
          data-ad-format="auto"
        ></ins>
      </div>

      {/* Banner lateral direito */}
      <div style={{
        position: 'fixed',
        top: '100px',
        right: 0,
        zIndex: 1000,
        width: '160px',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
      }}>
        {/* Substitua pelo código do AdSense ou imagem/banner */}
        <ins className="adsbygoogle"
          style={{ display: 'block', width: '160px', height: '600px' }}
          data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
          data-ad-slot="2222222222"
          data-ad-format="auto"
        ></ins>
      </div>

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

      {/* Bloco de anúncio Google AdSense - troque os valores pelo seu código real */}
      <div style={{ margin: '30px 0', textAlign: 'center' }}>
        <ins className="adsbygoogle"
          style={{ display: 'block', width: '100%', minHeight: '100px' }}
          data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
          data-ad-slot="1234567890"
          data-ad-format="auto"
        ></ins>
      </div>
      </div>
    </>
  );
};

export default Results;