import { FormData, NutritionPlan, Macros } from '../types/form';
import { generateMealPlan } from './mealGenerator';

export function calcularTMB(idade: number, genero: string, peso: number, altura: number): number {
  if (genero === 'masculino') {
    return (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
  } else {
    return (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
  }
}

export function ajustarCaloriasPorObjetivo(get: number, objetivo: string): number {
  switch(objetivo) {
    case 'perder': return get - 400;
    case 'manter': return get;
    case 'ganhar': return get + 400;
    default: return get;
  }
}

export function calcularMacros(calorias: number, objetivo: string): Macros {
  let proteinas: number, carboidratos: number, gorduras: number;
  
  switch(objetivo) {
    case 'perder':
      proteinas = Math.round((calorias * 0.40) / 4);
      carboidratos = Math.round((calorias * 0.30) / 4);
      gorduras = Math.round((calorias * 0.30) / 9);
      break;
    case 'ganhar':
      proteinas = Math.round((calorias * 0.30) / 4);
      carboidratos = Math.round((calorias * 0.40) / 4);
      gorduras = Math.round((calorias * 0.30) / 9);
      break;
    default: // manter
      proteinas = Math.round((calorias * 0.35) / 4);
      carboidratos = Math.round((calorias * 0.35) / 4);
      gorduras = Math.round((calorias * 0.30) / 9);
  }
  
  return { proteinas, carboidratos, gorduras };
}

export function generateNutritionPlan(formData: FormData): NutritionPlan {
  const tmb = calcularTMB(formData.idade, formData.genero, formData.peso, formData.altura);
  const get = tmb * formData.atividade;
  const calorias = ajustarCaloriasPorObjetivo(get, formData.objetivo);
  const macros = calcularMacros(calorias, formData.objetivo);
  const cardapio = generateMealPlan(calorias, macros, formData.restricoes);

  return {
    calorias: Math.round(calorias),
    macros,
    cardapio
  };
}