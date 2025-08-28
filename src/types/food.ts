export interface Food {
  nome: string;
  calorias: number;
  proteinas: number;
  carbs: number;
  gorduras: number;
  porcao: string;
}

export interface FoodDatabase {
  proteinas: Food[];
  carboidratos: Food[];
  vegetais: Food[];
  gorduras: Food[];
}