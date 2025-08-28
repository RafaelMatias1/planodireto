import React from 'react';
import { MealPlan as MealPlanType } from '../../types/form';

interface MealPlanProps {
  cardapio: MealPlanType;
}

const MealPlan: React.FC<MealPlanProps> = ({ cardapio }) => {
  return (
    <div>
      {Object.entries(cardapio).map(([nomeRefeicao, refeicao]) => (
        <div key={nomeRefeicao} className="meal-section">
          <div className="meal-title">
            {nomeRefeicao} ({refeicao.calorias} kcal)
          </div>
          <div className="meal-content">
            {refeicao.alimentos.map((alimento, index) => (
              <div key={index} className="food-item">
                <span>{alimento.nome} - {alimento.porcao}</span>
                <span>{alimento.calorias} kcal</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealPlan;