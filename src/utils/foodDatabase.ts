import { FoodDatabase } from '../types/food';

export const alimentosDB: FoodDatabase = {
  proteinas: [
    {nome: "Peito de frango grelhado", calorias: 165, proteinas: 31, carbs: 0, gorduras: 3.6, porcao: "100g"},
    {nome: "Ovo cozido", calorias: 155, proteinas: 13, carbs: 1.1, gorduras: 11, porcao: "2 unidades"},
    {nome: "Tilápia grelhada", calorias: 128, proteinas: 26, carbs: 0, gorduras: 2.7, porcao: "100g"},
    {nome: "Whey Protein", calorias: 120, proteinas: 25, carbs: 3, gorduras: 1, porcao: "1 scoop"},
    {nome: "Carne vermelha magra", calorias: 250, proteinas: 26, carbs: 0, gorduras: 15, porcao: "100g"},
    {nome: "Salmão", calorias: 208, proteinas: 22, carbs: 0, gorduras: 13, porcao: "100g"},
    {nome: "Atum em água", calorias: 116, proteinas: 25, carbs: 0, gorduras: 1, porcao: "100g"},
    {nome: "Queijo cottage", calorias: 98, proteinas: 11, carbs: 3.4, gorduras: 4.3, porcao: "100g"}
  ],
  carboidratos: [
    {nome: "Arroz integral", calorias: 123, proteinas: 2.6, carbs: 25, gorduras: 1, porcao: "100g"},
    {nome: "Batata doce", calorias: 86, proteinas: 2, carbs: 20, gorduras: 0.1, porcao: "100g"},
    {nome: "Aveia", calorias: 389, proteinas: 16.9, carbs: 66, gorduras: 6.9, porcao: "100g"},
    {nome: "Banana", calorias: 89, proteinas: 1.1, carbs: 23, gorduras: 0.3, porcao: "1 unidade"},
    {nome: "Pão integral", calorias: 69, proteinas: 3.5, carbs: 12, gorduras: 1.2, porcao: "1 fatia"},
    {nome: "Quinoa", calorias: 120, proteinas: 4.4, carbs: 22, gorduras: 1.9, porcao: "100g"},
    {nome: "Macarrão integral", calorias: 124, proteinas: 5, carbs: 25, gorduras: 1.1, porcao: "100g"}
  ],
  vegetais: [
    {nome: "Brócolis", calorias: 34, proteinas: 2.8, carbs: 7, gorduras: 0.4, porcao: "100g"},
    {nome: "Espinafre", calorias: 23, proteinas: 2.9, carbs: 3.6, gorduras: 0.4, porcao: "100g"},
    {nome: "Alface", calorias: 15, proteinas: 1.4, carbs: 2.9, gorduras: 0.2, porcao: "100g"},
    {nome: "Tomate", calorias: 18, proteinas: 0.9, carbs: 3.9, gorduras: 0.2, porcao: "100g"},
    {nome: "Cenoura", calorias: 41, proteinas: 0.9, carbs: 10, gorduras: 0.2, porcao: "100g"},
    {nome: "Abobrinha", calorias: 17, proteinas: 1.2, carbs: 3.1, gorduras: 0.3, porcao: "100g"}
  ],
  gorduras: [
    {nome: "Azeite extra virgem", calorias: 884, proteinas: 0, carbs: 0, gorduras: 100, porcao: "1 colher sopa"},
    {nome: "Abacate", calorias: 160, proteinas: 2, carbs: 9, gorduras: 15, porcao: "1/2 unidade"},
    {nome: "Castanha do Pará", calorias: 656, proteinas: 14, carbs: 12, gorduras: 67, porcao: "30g"},
    {nome: "Amendoim", calorias: 567, proteinas: 26, carbs: 16, gorduras: 49, porcao: "30g"},
    {nome: "Amêndoas", calorias: 579, proteinas: 21, carbs: 22, gorduras: 50, porcao: "30g"}
  ]
};