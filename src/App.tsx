import React, { useState } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import PlanForm from './components/Form';
import Results from './components/Results';
import { FormData, NutritionPlan } from './types/form';
import { generateNutritionPlan } from './utils/calculations';
import './styles/globals.css';

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [nutritionPlan, setNutritionPlan] = useState<NutritionPlan | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleFormSubmit = (data: FormData) => {
    const plan = generateNutritionPlan(data);
    setFormData(data);
    setNutritionPlan(plan);
    setShowResults(true);
  };

  const handleNewPlan = () => {
    setShowResults(false);
    setFormData(null);
    setNutritionPlan(null);
  };

  return (
    <Layout>
      <Header />
      {!showResults ? (
        <PlanForm onSubmit={handleFormSubmit} />
      ) : (
        nutritionPlan && (
          <Results 
            plan={nutritionPlan} 
            formData={formData!}
            onNewPlan={handleNewPlan}
          />
        )
      )}
    </Layout>
  );
};

export default App;
