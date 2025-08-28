import { NutritionPlan, FormData } from '../types/form';

export function generatePDFContent(plan: NutritionPlan, formData: FormData): string {
  const hoje = new Date().toLocaleDateString('pt-BR');
  
  const objetivoTexto = {
    'perder': 'Perder Gordura',
    'manter': 'Manter o Peso',
    'ganhar': 'Ganhar Massa Muscular'
  };
  
  const atividadeTexto = {
    1.2: 'Sedentário',
    1.375: 'Levemente Ativo',
    1.55: 'Moderadamente Ativo',
    1.725: 'Muito Ativo',
    1.9: 'Extremamente Ativo'
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Meu Plano Nutricional - Plano Direto</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
        .header { text-align: center; margin-bottom: 30px; }
        .header h1 { color: #667eea; margin-bottom: 5px; }
        .header p { color: #666; }
        .info-box { background: #f8f9ff; border: 2px solid #667eea; border-radius: 10px; padding: 20px; margin-bottom: 20px; }
        .calories { font-size: 24px; font-weight: bold; color: #667eea; text-align: center; margin: 20px 0; }
        .macros { display: flex; justify-content: space-around; margin: 20px 0; }
        .macro { text-align: center; }
        .macro-value { font-size: 20px; font-weight: bold; color: #667eea; }
        .meal { margin-bottom: 25px; }
        .meal-title { background: #667eea; color: white; padding: 10px; border-radius: 5px 5px 0 0; font-weight: bold; }
        .meal-content { border: 2px solid #667eea; border-top: none; border-radius: 0 0 5px 5px; padding: 15px; }
        .food-item { display: flex; justify-content: space-between; margin: 8px 0; border-bottom: 1px solid #eee; padding-bottom: 5px; }
        .disclaimer { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin-top: 30px; font-size: 12px; }
        .page-break { page-break-before: always; }
        @media print {
          body { margin: 0; }
          .header { margin-bottom: 20px; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🚀 Plano Direto - Seu Plano Nutricional</h1>
        <p>Plano gerado em: ${hoje}</p>
      </div>
      
      <div class="info-box">
        <h3>📋 Seus Dados</h3>
        <p><strong>Idade:</strong> ${formData.idade} anos</p>
        <p><strong>Gênero:</strong> ${formData.genero === 'masculino' ? 'Masculino' : 'Feminino'}</p>
        <p><strong>Peso:</strong> ${formData.peso} kg</p>
        <p><strong>Altura:</strong> ${formData.altura} cm</p>
        <p><strong>Objetivo:</strong> ${objetivoTexto[formData.objetivo]}</p>
        <p><strong>Atividade Física:</strong> ${atividadeTexto[formData.atividade as keyof typeof atividadeTexto]}</p>
        ${formData.biotipo ? `<p><strong>Biotipo:</strong> ${formData.biotipo}</p>` : ''}
        ${formData.restricoes.length > 0 ? `<p><strong>Restrições:</strong> ${formData.restricoes.join(', ')}</p>` : ''}
      </div>
      
      <div class="calories">
        🎯 Meta Diária: ${plan.calorias} kcal
      </div>
      
      <div class="macros">
        <div class="macro">
          <div class="macro-value">${plan.macros.proteinas}g</div>
          <div>Proteínas</div>
        </div>
        <div class="macro">
          <div class="macro-value">${plan.macros.carboidratos}g</div>
          <div>Carboidratos</div>
        </div>
        <div class="macro">
          <div class="macro-value">${plan.macros.gorduras}g</div>
          <div>Gorduras</div>
        </div>
      </div>
      
      <div class="page-break"></div>
      
      <h2 style="color: #667eea;">🍽️ Seu Cardápio Personalizado</h2>
      
      ${Object.entries(plan.cardapio).map(([nomeRefeicao, refeicao]) => `
        <div class="meal">
          <div class="meal-title">${nomeRefeicao} (${refeicao.calorias} kcal)</div>
          <div class="meal-content">
            ${refeicao.alimentos.map(alimento => `
              <div class="food-item">
                <span>${alimento.nome} - ${alimento.porcao}</span>
                <span>${alimento.calorias} kcal</span>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
      
      <div class="disclaimer">
        <strong>⚠️ IMPORTANTE:</strong> Este plano é uma sugestão gerada por computador e não substitui a orientação de um nutricionista e um profissional de educação física. Consulte um profissional de saúde antes de iniciar qualquer dieta ou programa de exercícios.
      </div>
      
      <div style="text-align: center; margin-top: 30px; color: #666;">
        <p>Gerado por: <strong>Plano Direto</strong> - Nutrição e Treino em Segundos</p>
        <p>📅 ${hoje}</p>
      </div>
    </body>
    </html>
  `;
}

export function downloadAsPDF(htmlContent: string, filename: string = 'meu-plano-nutricional.pdf') {
  // Criar nova janela para impressão
  const printWindow = window.open('', '_blank');
  
  if (!printWindow) {
    alert('Por favor, permita pop-ups para baixar o PDF');
    return;
  }
  
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  
  // Aguardar carregamento e imprimir
  printWindow.onload = function() {
    printWindow.focus();
    printWindow.print();
    
    // Fechar janela após impressão (funciona na maioria dos browsers)
    printWindow.onafterprint = function() {
      printWindow.close();
    };
  };
}

// Função alternativa para download direto (funciona melhor em alguns casos)
export function downloadAsHTML(plan: NutritionPlan, formData: FormData) {
  const htmlContent = generatePDFContent(plan, formData);
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'meu-plano-nutricional.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
}