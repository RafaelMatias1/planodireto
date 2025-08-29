import React, { useState } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import PlanForm from './components/Form';
import Results from './components/Results';
import { FormData, NutritionPlan } from './types/form';
import { generateNutritionPlan } from './utils/calculations';
import { SpeedInsights } from "@vercel/speed-insights/react"
import './styles/globals.css';

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [nutritionPlan, setNutritionPlan] = useState<NutritionPlan | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFormSubmit = async (data: FormData) => {
    setIsGenerating(true);
    
    try {
      // Simular um pequeno delay para melhor UX
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const plan = generateNutritionPlan(data);
      setFormData(data);
      setNutritionPlan(plan);
      setShowResults(true);
    } catch (error) {
      console.error('Erro ao gerar plano:', error);
      alert('Erro ao gerar o plano. Tente novamente.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleNewPlan = () => {
    setShowResults(false);
    setFormData(null);
    setNutritionPlan(null);
  };

  return (
    <Layout>
      <SpeedInsights />
      <Header />
      {isGenerating ? (
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '60px 40px',
          textAlign: 'center',
          animation: 'fadeInUp 0.8s ease-out'
        }}>
          <div style={{ fontSize: '4em', marginBottom: '20px' }}>⚡</div>
          <h2 style={{ color: '#667eea', marginBottom: '15px' }}>
            Gerando seu plano personalizado...
          </h2>
          <p style={{ color: '#666', fontSize: '1.1em' }}>
            Calculando suas necessidades nutricionais e montando o cardápio ideal para você!
          </p>
          <div style={{
            width: '200px',
            height: '4px',
            background: '#e1e5e9',
            borderRadius: '2px',
            margin: '30px auto',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '50px',
              height: '100%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '2px',
              animation: 'loading 1.5s ease-in-out infinite'
            }}></div>
          </div>
        </div>
      ) : !showResults ? (
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
      
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100px); }
          50% { transform: translateX(250px); }
          100% { transform: translateX(-100px); }
        }
      `}</style>
    </Layout>
  );
};

export default App;