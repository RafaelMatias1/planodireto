import { MealPlan, Macros, FoodItem } from '../types/form';
import { alimentosDB } from './foodDatabase';

export function generateMealPlan(calorias: number, macros: Macros, restricoes: string[]): MealPlan {
  const refeicoes = {
    'Café da Manhã': Math.round(calorias * 0.25),
    'Lanche da Manhã': Math.round(calorias * 0.10),
    'Almoço': Math.round(calorias * 0.35),
    'Lanche da Tarde': Math.round(calorias * 0.10),
    'Jantar': Math.round(calorias * 0.20)
  };

  const mealPlan: MealPlan = {};

  Object.entries(refeicoes).forEach(([refeicao, caloriasMeta]) => {
    const alimentos = selecionarAlimentos(caloriasMeta, refeicao, restricoes);
    
    mealPlan[refeicao] = {
      nome: refeicao,
      calorias: caloriasMeta,
      alimentos: alimentos
    };
  });

  return mealPlan;
}

function selecionarAlimentos(caloriasMeta: number, refeicao: string, restricoes: string[]): FoodItem[] {
  const alimentos: FoodItem[] = [];
  
  // Filtrar alimentos baseado nas restrições
  const alimentosFiltrados = filtrarPorRestricoes(restricoes);
  
  if (refeicao.includes('Café')) {
    alimentos.push(mapFoodToFoodItem(alimentosFiltrados.carboidratos[2])); // Aveia
    alimentos.push(mapFoodToFoodItem(alimentosFiltrados.carboidratos[3])); // Banana
  } else if (refeicao.includes('Almoço') || refeicao.includes('Jantar')) {
    alimentos.push(mapFoodToFoodItem(alimentosFiltrados.proteinas[0])); // Proteína principal
    alimentos.push(mapFoodToFoodItem(alimentosFiltrados.carboidratos[0])); // Carboidrato
    alimentos.push(mapFoodToFoodItem(alimentosFiltrados.vegetais[0])); // Vegetal
  } else {
    // Lanches
    alimentos.push(mapFoodToFoodItem(alimentosFiltrados.proteinas[1])); 
    if (alimentosFiltrados.gorduras.length > 0) {
      alimentos.push(mapFoodToFoodItem(alimentosFiltrados.gorduras[0]));
    }
  }
  
  return alimentos;
}

function filtrarPorRestricoes(restricoes: string[]) {
  let alimentosFiltrados = { ...alimentosDB };
  
  if (restricoes.includes('vegetariano')) {
    alimentosFiltrados.proteinas = alimentosFiltrados.proteinas.filter(p => 
      !p.nome.toLowerCase().includes('frango') && 
      !p.nome.toLowerCase().includes('carne') && 
      !p.nome.toLowerCase().includes('peixe') &&
      !p.nome.toLowerCase().includes('tilápia') &&
      !p.nome.toLowerCase().includes('salmão') &&
      !p.nome.toLowerCase().includes('atum')
    );
  }
  
  if (restricoes.includes('vegano')) {
    alimentosFiltrados.proteinas = alimentosFiltrados.proteinas.filter(p => 
      !p.nome.toLowerCase().includes('ovo') && 
      !p.nome.toLowerCase().includes('whey') &&
      !p.nome.toLowerCase().includes('queijo')
    );
  }
  
  return alimentosFiltrados;
}

function mapFoodToFoodItem(food: any): FoodItem {
  return {
    nome: food.nome,
    porcao: food.porcao,
    calorias: food.calorias,
    proteinas: food.proteinas,
    carboidratos: food.carbs,
    gorduras: food.gorduras
  };
}