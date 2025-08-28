import React, { useState } from 'react';
import { NutritionPlan, FormData } from '../../types/form';
import { downloadAsPDF, downloadAsHTML } from '../../utils/PDFGenerator';

interface DownloadButtonProps {
  plan: NutritionPlan;
  formData: FormData;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ plan, formData }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Tentar download como PDF primeiro
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Meu Plano Nutricional - Plano Direto</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; color: #333; line-height: 1.6; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid #667eea; padding-bottom: 20px; }
            .header h1 { color: #667eea; margin-bottom: 5px; font-size: 2.5em; }
            .header p { color: #666; font-size: 1.1em; }
            .info-section { background: #f8f9ff; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; }
            .info-section h3 { color: #667eea; margin-top: 0; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 10px 0; }
            .info-item { padding: 8px 0; }
            .info-item strong { color: #667eea; }
            .calories-section { background: linear-gradient(135deg, #667eea, #764ba2); color: white; text-align: center; padding: 30px; border-radius: 15px; margin: 30px 0; }
            .calories-section h2 { font-size: 2em; margin: 0; }
            .calories-value { font-size: 3em; font-weight: bold; margin: 10px 0; }
            .macros-section { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 30px 0; }
            .macro-card { background: #f8f9ff; border: 2px solid #667eea; border-radius: 10px; padding: 20px; text-align: center; }
            .macro-value { font-size: 2em; font-weight: bold; color: #667eea; margin-bottom: 5px; }
            .macro-label { color: #666; font-weight: bold; }
            .meal-section { margin: 30px 0; break-inside: avoid; }
            .meal-header { background: #667eea; color: white; padding: 15px 20px; border-radius: 10px 10px 0 0; font-size: 1.2em; font-weight: bold; }
            .meal-content { border: 2px solid #667eea; border-top: none; border-radius: 0 0 10px 10px; padding: 20px; background: white; }
            .food-list { margin: 0; padding: 0; }
            .food-item { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #eee; }
            .food-item:last-child { border-bottom: none; }
            .food-name { font-weight: 500; color: #333; }
            .food-calories { color: #667eea; font-weight: bold; }
            .disclaimer { background: #fff3cd; border: 2px solid #ffeaa7; padding: 20px; border-radius: 10px; margin: 40px 0; }
            .disclaimer strong { color: #856404; }
            .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid #667eea; color: #666; }
            .page-break { page-break-before: always; }
            @media print {
              body { margin: 0; font-size: 12px; }
              .header { margin-bottom: 20px; }
              .calories-section { background: #667eea !important; -webkit-print-color-adjust: exact; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🚀 Plano Direto</h1>
            <p>Seu Plano Nutricional Personalizado</p>
            <p>Gerado em: ${new Date().toLocaleDateString('pt-BR')}</p>
          </div>
          
          <div class="info-section">
            <h3>📋 Informações do Usuário</h3>
            <div class="info-grid">
              <div class="info-item"><strong>Idade:</strong> ${formData.idade} anos</div>
              <div class="info-item"><strong>Gênero:</strong> ${formData.genero === 'masculino' ? 'Masculino' : 'Feminino'}</div>
              <div class="info-item"><strong>Peso:</strong> ${formData.peso} kg</div>
              <div class="info-item"><strong>Altura:</strong> ${formData.altura} cm</div>
              <div class="info-item"><strong>Objetivo:</strong> ${formData.objetivo === 'perder' ? 'Perder Gordura' : formData.objetivo === 'ganhar' ? 'Ganhar Massa' : 'Manter Peso'}</div>
              <div class="info-item"><strong>Atividade:</strong> ${getActivityLabel(formData.atividade)}</div>
            </div>
            ${formData.biotipo ? `<div class="info-item"><strong>Biotipo:</strong> ${formData.biotipo}</div>` : ''}
            ${formData.restricoes.length > 0 ? `<div class="info-item"><strong>Restrições:</strong> ${formData.restricoes.join(', ')}</div>` : ''}
          </div>
          
          <div class="calories-section">
            <h2>🎯 Meta Calórica Diária</h2>
            <div class="calories-value">${plan.calorias} kcal</div>
          </div>
          
          <div class="macros-section">
            <div class="macro-card">
              <div class="macro-value">${plan.macros.proteinas}g</div>
              <div class="macro-label">Proteínas</div>
            </div>
            <div class="macro-card">
              <div class="macro-value">${plan.macros.carboidratos}g</div>
              <div class="macro-label">Carboidratos</div>
            </div>
            <div class="macro-card">
              <div class="macro-value">${plan.macros.gorduras}g</div>
              <div class="macro-label">Gorduras</div>
            </div>
          </div>
          
          <div class="page-break"></div>
          
          <h2 style="color: #667eea; text-align: center; margin: 40px 0;">🍽️ Seu Cardápio Personalizado</h2>
          
          ${Object.entries(plan.cardapio).map(([nomeRefeicao, refeicao]) => `
            <div class="meal-section">
              <div class="meal-header">${nomeRefeicao} (${refeicao.calorias} kcal)</div>
              <div class="meal-content">
                <div class="food-list">
                  ${refeicao.alimentos.map(alimento => `
                    <div class="food-item">
                      <span class="food-name">${alimento.nome} - ${alimento.porcao}</span>
                      <span class="food-calories">${alimento.calorias} kcal</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
          
          <div class="disclaimer">
            <strong>⚠️ IMPORTANTE:</strong> Este plano é uma sugestão gerada por computador e não substitui a orientação de um nutricionista e um profissional de educação física. Consulte um profissional de saúde antes de iniciar qualquer dieta ou programa de exercícios.
          </div>
          
          <div class="footer">
            <p><strong>Plano Direto</strong> - Nutrição e Treino em Segundos</p>
            <p>📅 Gerado em: ${new Date().toLocaleDateString('pt-BR')}</p>
          </div>
        </body>
        </html>
      `;
      
      // Criar e baixar arquivo HTML
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `plano-nutricional-${new Date().toISOString().split('T')[0]}.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Erro ao gerar download:', error);
      alert('Erro ao baixar o arquivo. Tente novamente.');
    } finally {
      setIsDownloading(false);
    }
  };

  const getActivityLabel = (value: number): string => {
    const labels = {
      1.2: 'Sedentário',
      1.375: 'Levemente Ativo',
      1.55: 'Moderadamente Ativo',
      1.725: 'Muito Ativo',
      1.9: 'Extremamente Ativo'
    };
    return labels[value as keyof typeof labels] || 'N/A';
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      style={{
        padding: '10px 20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: 'none',
        borderRadius: '25px',
        color: 'white',
        cursor: isDownloading ? 'not-allowed' : 'pointer',
        fontSize: '14px',
        fontWeight: '600',
        opacity: isDownloading ? 0.7 : 1,
        transition: 'all 0.3s ease'
      }}
    >
      {isDownloading ? '⏳ Gerando...' : '📥 Baixar Plano'}
    </button>
  );
};

export default DownloadButton;