import { FormData, NutritionPlan, Macros } from '../types/form';
import { generateMealPlan } from './mealGenerator';

export function calcularTMB(idade: number, genero: string, peso: number, altura: number): number {
  // Usando fórmula Mifflin-St Jeor (mais precisa)
  if (genero === 'masculino') {
    return (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
  } else {
    return (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
  }
}

export function ajustarCaloriasPorObjetivo(get: number, objetivo: string, biotipo?: string): number {
  let ajuste = 0;
  
  // Ajuste base por objetivo
  switch(objetivo) {
    case 'perder': 
      ajuste = -500; // Déficit mais agressivo para perda de gordura
      break;
    case 'manter': 
      ajuste = 0;
      break;
    case 'ganhar': 
      ajuste = 400; // Superávit para ganho de massa
      break;
    default: 
      ajuste = 0;
  }
  
  // Ajuste adicional por biotipo (se fornecido)
  if (biotipo) {
    switch(biotipo) {
      case 'ectomorfo':
        if (objetivo === 'ganhar') ajuste += 200; // Ectomorfos precisam de mais calorias
        break;
      case 'endomorfo':
        if (objetivo === 'perder') ajuste -= 100; // Endomorfos perdem peso mais devagar
        break;
      case 'mesomorfo':
        // Mesomorfos mantêm ajuste padrão
        break;
    }
  }
  
  const caloriasFinal = get + ajuste;
  
  // Garantir mínimo seguro de calorias
  const minimoSeguro = objetivo === 'feminino' ? 1200 : 1500;
  return Math.max(caloriasFinal, minimoSeguro);
}

export function calcularMacros(calorias: number, objetivo: string, biotipo?: string): Macros {
  let proteinasPercent: number, carbsPercent: number, gordurasPercent: number;
  
  // Distribuição base por objetivo
  switch(objetivo) {
    case 'perder':
      proteinasPercent = 0.35; // Mais proteína para preservar massa muscular
      carbsPercent = 0.30;
      gordurasPercent = 0.35;
      break;
    case 'ganhar':
      proteinasPercent = 0.25; 
      carbsPercent = 0.45; // Mais carbs para energia e crescimento
      gordurasPercent = 0.30;
      break;
    default: // manter
      proteinasPercent = 0.30;
      carbsPercent = 0.40;
      gordurasPercent = 0.30;
  }
  
  // Ajuste fino por biotipo
  if (biotipo) {
    switch(biotipo) {
      case 'ectomorfo':
        carbsPercent += 0.05; // Ectomorfos toleram mais carbs
        gordurasPercent -= 0.05;
        break;
      case 'endomorfo':
        carbsPercent -= 0.05; // Endomorfos fazem melhor com menos carbs
        proteinasPercent += 0.05;
        break;
    }
  }
  
  // Cálculo final dos macros em gramas
  const proteinas = Math.round((calorias * proteinasPercent) / 4);
  const carboidratos = Math.round((calorias * carbsPercent) / 4);
  const gorduras = Math.round((calorias * gordurasPercent) / 9);
  
  return { proteinas, carboidratos, gorduras };
}

export function generateNutritionPlan(formData: FormData): NutritionPlan {
  const tmb = calcularTMB(formData.idade, formData.genero, formData.peso, formData.altura);
  const get = tmb * formData.atividade;
  const calorias = ajustarCaloriasPorObjetivo(get, formData.objetivo, formData.biotipo);
  const macros = calcularMacros(calorias, formData.objetivo, formData.biotipo);
  const cardapio = generateMealPlan(calorias, macros, formData.restricoes);

  return {
    calorias: Math.round(calorias),
    macros,
    cardapio
  };
}