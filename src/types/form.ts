export interface FormData {
  idade: number;
  genero: 'masculino' | 'feminino';
  peso: number;
  altura: number;
  objetivo: 'perder' | 'manter' | 'ganhar';
  atividade: number;
  restricoes: string[];
  biotipo?: 'ectomorfo' | 'mesomorfo' | 'endomorfo';
}

export interface Macros {
  proteinas: number;
  carboidratos: number;
  gorduras: number;
}

export interface NutritionPlan {
  calorias: number;
  macros: Macros;
  cardapio: MealPlan;
}

export interface MealPlan {
  [key: string]: Meal;
}

export interface Meal {
  nome: string;
  calorias: number;
  alimentos: FoodItem[];
}

export interface FoodItem {
  nome: string;
  porcao: string;
  calorias: number;
  proteinas: number;
  carboidratos: number;
  gorduras: number;
}
