import { MealPlan, Macros, FoodItem } from '../types/form';
import { alimentosDB } from './foodDatabase';
import { Food } from '../types/food';

export function generateMealPlan(calorias: number, macros: Macros, restricoes: string[]): MealPlan {
  const refeicoes = {
    'Café da Manhã': {
      calorias: Math.round(calorias * 0.25),
      proteinas: Math.round(macros.proteinas * 0.20),
      carboidratos: Math.round(macros.carboidratos * 0.35),
      gorduras: Math.round(macros.gorduras * 0.25)
    },
    'Lanche da Manhã': {
      calorias: Math.round(calorias * 0.10),
      proteinas: Math.round(macros.proteinas * 0.15),
      carboidratos: Math.round(macros.carboidratos * 0.15),
      gorduras: Math.round(macros.gorduras * 0.10)
    },
    'Almoço': {
      calorias: Math.round(calorias * 0.35),
      proteinas: Math.round(macros.proteinas * 0.35),
      carboidratos: Math.round(macros.carboidratos * 0.30),
      gorduras: Math.round(macros.gorduras * 0.35)
    },
    'Lanche da Tarde': {
      calorias: Math.round(calorias * 0.10),
      proteinas: Math.round(macros.proteinas * 0.15),
      carboidratos: Math.round(macros.carboidratos * 0.10),
      gorduras: Math.round(macros.gorduras * 0.15)
    },
    'Jantar': {
      calorias: Math.round(calorias * 0.20),
      proteinas: Math.round(macros.proteinas * 0.15),
      carboidratos: Math.round(macros.carboidratos * 0.10),
      gorduras: Math.round(macros.gorduras * 0.15)
    }
  };

  const mealPlan: MealPlan = {};
  const alimentosFiltrados = filtrarPorRestricoes(restricoes);

  Object.entries(refeicoes).forEach(([refeicao, metas]) => {
    const alimentos = selecionarAlimentosInteligente(metas, refeicao, alimentosFiltrados);
    const caloriasTotais = alimentos.reduce((sum, alimento) => sum + alimento.calorias, 0);
    
    mealPlan[refeicao] = {
      nome: refeicao,
      calorias: caloriasTotais,
      alimentos: alimentos
    };
  });

  return mealPlan;
}

function selecionarAlimentosInteligente(
  metas: { calorias: number; proteinas: number; carboidratos: number; gorduras: number },
  refeicao: string,
  alimentosFiltrados: any
): FoodItem[] {
  const alimentos: FoodItem[] = [];
  
  if (refeicao === 'Café da Manhã') {
    // Café da manhã: foco em carboidratos e energia
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.carboidratos, ['aveia', 'granola', 'pão']))); 
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.carboidratos, ['banana', 'maçã', 'mamão'])));
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.proteinas, ['ovo', 'iogurte', 'leite'])));
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.gorduras, ['castanha', 'amêndoas', 'azeite'])));
    
  } else if (refeicao === 'Lanche da Manhã') {
    // Lanche leve
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.carboidratos, ['fruta'])));
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.gorduras, ['castanha', 'amendoim'])));
    
  } else if (refeicao === 'Almoço') {
    // Almoço: refeição principal
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.proteinas, ['frango', 'carne', 'peixe', 'ovo'])));
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.carboidratos, ['arroz', 'batata', 'macarrão'])));
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.vegetais)));
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.vegetais)));
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.gorduras, ['azeite', 'abacate'])));
    
  } else if (refeicao === 'Lanche da Tarde') {
    // Lanche da tarde: proteína + gordura boa
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.proteinas, ['iogurte', 'queijo', 'whey'])));
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.gorduras, ['castanha', 'amendoim', 'abacate'])));
    
  } else if (refeicao === 'Jantar') {
    // Jantar: mais leve, menos carboidratos
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.proteinas, ['frango', 'peixe', 'ovo'])));
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.vegetais)));
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.vegetais)));
    alimentos.push(mapFoodToFoodItem(getRandomFood(alimentosFiltrados.gorduras, ['azeite', 'castanha'])));
  }
  
  return alimentos;
}

function getRandomFood(categoria: Food[], keywords?: string[]): Food {
  if (!keywords || keywords.length === 0) {
    return categoria[Math.floor(Math.random() * categoria.length)];
  }
  
  // Filtrar por palavras-chave
  const filtrados = categoria.filter(food => 
    keywords.some(keyword => 
      food.nome.toLowerCase().includes(keyword.toLowerCase())
    )
  );
  
  if (filtrados.length > 0) {
    return filtrados[Math.floor(Math.random() * filtrados.length)];
  }
  
  // Se não encontrar nenhum, retornar aleatório da categoria
  return categoria[Math.floor(Math.random() * categoria.length)];
}

function filtrarPorRestricoes(restricoes: string[]) {
  let alimentosFiltrados = JSON.parse(JSON.stringify(alimentosDB)); // Deep clone
  
  if (restricoes.includes('vegetariano')) {
    alimentosFiltrados.proteinas = alimentosFiltrados.proteinas.filter((p: Food) => 
      !p.nome.toLowerCase().includes('frango') && 
      !p.nome.toLowerCase().includes('carne') && 
      !p.nome.toLowerCase().includes('peixe') &&
      !p.nome.toLowerCase().includes('tilápia') &&
      !p.nome.toLowerCase().includes('salmão') &&
      !p.nome.toLowerCase().includes('atum') &&
      !p.nome.toLowerCase().includes('sardinha') &&
      !p.nome.toLowerCase().includes('merluza')
    );
  }
  
  if (restricoes.includes('vegano')) {
    alimentosFiltrados.proteinas = alimentosFiltrados.proteinas.filter((p: Food) => 
      !p.nome.toLowerCase().includes('ovo') && 
      !p.nome.toLowerCase().includes('whey') &&
      !p.nome.toLowerCase().includes('caseína') &&
      !p.nome.toLowerCase().includes('queijo') &&
      !p.nome.toLowerCase().includes('ricota') &&
      !p.nome.toLowerCase().includes('iogurte') &&
      !p.nome.toLowerCase().includes('leite')
    );
  }
  
  if (restricoes.includes('lactose')) {
    alimentosFiltrados.proteinas = alimentosFiltrados.proteinas.filter((p: Food) => 
      !p.nome.toLowerCase().includes('leite') &&
      !p.nome.toLowerCase().includes('queijo') &&
      !p.nome.toLowerCase().includes('iogurte') &&
      !p.nome.toLowerCase().includes('ricota')
    );
  }
  
  if (restricoes.includes('gluten')) {
    alimentosFiltrados.carboidratos = alimentosFiltrados.carboidratos.filter((c: Food) => 
      !c.nome.toLowerCase().includes('pão') &&
      !c.nome.toLowerCase().includes('macarrão comum') &&
      !c.nome.toLowerCase().includes('aveia') && // Aveia pode ter contaminação cruzada
      !c.nome.toLowerCase().includes('granola')
    );
  }
  
  return alimentosFiltrados;
}

function mapFoodToFoodItem(food: Food): FoodItem {
  return {
    nome: food.nome,
    porcao: food.porcao,
    calorias: food.calorias,
    proteinas: food.proteinas,
    carboidratos: food.carbs,
    gorduras: food.gorduras
  };
}
