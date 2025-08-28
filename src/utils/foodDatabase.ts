import { FoodDatabase } from '../types/food';

export const alimentosDB: FoodDatabase = {
  proteinas: [
    // Carnes e Peixes
    {nome: "Peito de frango grelhado", calorias: 165, proteinas: 31, carbs: 0, gorduras: 3.6, porcao: "100g"},
    {nome: "Coxinha de frango sem pele", calorias: 175, proteinas: 24, carbs: 0, gorduras: 8, porcao: "100g"},
    {nome: "Carne vermelha magra (patinho)", calorias: 163, proteinas: 27, carbs: 0, gorduras: 5.5, porcao: "100g"},
    {nome: "Carne vermelha (alcatra)", calorias: 250, proteinas: 26, carbs: 0, gorduras: 15, porcao: "100g"},
    {nome: "Tilápia grelhada", calorias: 128, proteinas: 26, carbs: 0, gorduras: 2.7, porcao: "100g"},
    {nome: "Salmão grelhado", calorias: 208, proteinas: 22, carbs: 0, gorduras: 13, porcao: "100g"},
    {nome: "Atum em água", calorias: 116, proteinas: 25, carbs: 0, gorduras: 1, porcao: "100g"},
    {nome: "Sardinha em conserva", calorias: 185, proteinas: 25, carbs: 0, gorduras: 9, porcao: "100g"},
    {nome: "Merluza grelhada", calorias: 90, proteinas: 20, carbs: 0, gorduras: 1.3, porcao: "100g"},
    
    // Ovos e Laticínios
    {nome: "Ovo cozido", calorias: 155, proteinas: 13, carbs: 1.1, gorduras: 11, porcao: "2 unidades"},
    {nome: "Clara de ovo", calorias: 52, proteinas: 11, carbs: 0.7, gorduras: 0.2, porcao: "3 claras"},
    {nome: "Queijo cottage", calorias: 98, proteinas: 11, carbs: 3.4, gorduras: 4.3, porcao: "100g"},
    {nome: "Ricota", calorias: 138, proteinas: 11, carbs: 4, gorduras: 8, porcao: "100g"},
    {nome: "Iogurte grego natural", calorias: 59, proteinas: 10, carbs: 3.6, gorduras: 0.4, porcao: "100g"},
    {nome: "Leite desnatado", calorias: 34, proteinas: 3.4, carbs: 4.8, gorduras: 0.1, porcao: "200ml"},
    
    // Proteínas Vegetais
    {nome: "Tofu firme", calorias: 144, proteinas: 17, carbs: 3, gorduras: 9, porcao: "100g"},
    {nome: "Tempeh", calorias: 190, proteinas: 19, carbs: 9, gorduras: 11, porcao: "100g"},
    {nome: "Seitan", calorias: 168, proteinas: 25, carbs: 4, gorduras: 2, porcao: "100g"},
    {nome: "Lentilha cozida", calorias: 116, proteinas: 9, carbs: 20, gorduras: 0.4, porcao: "100g"},
    {nome: "Grão de bico cozido", calorias: 164, proteinas: 8, carbs: 27, gorduras: 2.6, porcao: "100g"},
    {nome: "Feijão preto cozido", calorias: 132, proteinas: 9, carbs: 23, gorduras: 0.5, porcao: "100g"},
    
    // Suplementos
    {nome: "Whey Protein", calorias: 120, proteinas: 25, carbs: 3, gorduras: 1, porcao: "1 scoop"},
    {nome: "Caseína", calorias: 110, proteinas: 24, carbs: 1, gorduras: 1, porcao: "1 scoop"},
    {nome: "Proteína de ervilha", calorias: 108, proteinas: 21, carbs: 2, gorduras: 2, porcao: "1 scoop"}
  ],
  
  carboidratos: [
    // Cereais e Grãos
    {nome: "Arroz integral", calorias: 123, proteinas: 2.6, carbs: 25, gorduras: 1, porcao: "100g"},
    {nome: "Arroz branco", calorias: 130, proteinas: 2.7, carbs: 28, gorduras: 0.3, porcao: "100g"},
    {nome: "Quinoa cozida", calorias: 120, proteinas: 4.4, carbs: 22, gorduras: 1.9, porcao: "100g"},
    {nome: "Aveia em flocos", calorias: 389, proteinas: 16.9, carbs: 66, gorduras: 6.9, porcao: "50g"},
    {nome: "Granola caseira", calorias: 471, proteinas: 10, carbs: 60, gorduras: 20, porcao: "50g"},
    {nome: "Farelo de aveia", calorias: 246, proteinas: 17, carbs: 66, gorduras: 7, porcao: "50g"},
    
    // Massas
    {nome: "Macarrão integral", calorias: 124, proteinas: 5, carbs: 25, gorduras: 1.1, porcao: "100g"},
    {nome: "Macarrão comum", calorias: 131, proteinas: 5, carbs: 25, gorduras: 1.1, porcao: "100g"},
    {nome: "Macarrão de arroz", calorias: 109, proteinas: 0.9, carbs: 25, gorduras: 0.6, porcao: "100g"},
    
    // Tubérculos
    {nome: "Batata doce cozida", calorias: 86, proteinas: 2, carbs: 20, gorduras: 0.1, porcao: "100g"},
    {nome: "Batata inglesa cozida", calorias: 87, proteinas: 2, carbs: 20, gorduras: 0.1, porcao: "100g"},
    {nome: "Mandioca cozida", calorias: 160, proteinas: 1.4, carbs: 38, gorduras: 0.3, porcao: "100g"},
    {nome: "Inhame cozido", calorias: 118, proteinas: 1.5, carbs: 28, gorduras: 0.2, porcao: "100g"},
    
    // Pães
    {nome: "Pão integral", calorias: 247, proteinas: 13, carbs: 41, gorduras: 4.2, porcao: "2 fatias"},
    {nome: "Pão francês", calorias: 300, proteinas: 9, carbs: 58, gorduras: 3.1, porcao: "1 unidade"},
    {nome: "Pão de centeio", calorias: 259, proteinas: 9, carbs: 48, gorduras: 3.3, porcao: "2 fatias"},
    {nome: "Tapioca", calorias: 152, proteinas: 0.2, carbs: 37, gorduras: 0.03, porcao: "1 unidade"},
    
    // Frutas
    {nome: "Banana", calorias: 89, proteinas: 1.1, carbs: 23, gorduras: 0.3, porcao: "1 unidade"},
    {nome: "Maçã", calorias: 52, proteinas: 0.3, carbs: 14, gorduras: 0.2, porcao: "1 unidade"},
    {nome: "Pêra", calorias: 57, proteinas: 0.4, carbs: 15, gorduras: 0.1, porcao: "1 unidade"},
    {nome: "Laranja", calorias: 47, proteinas: 0.9, carbs: 12, gorduras: 0.1, porcao: "1 unidade"},
    {nome: "Mamão", calorias: 43, proteinas: 0.5, carbs: 11, gorduras: 0.3, porcao: "1 fatia"},
    {nome: "Manga", calorias: 60, proteinas: 0.8, carbs: 15, gorduras: 0.4, porcao: "1 fatia"},
    {nome: "Uva", calorias: 62, proteinas: 0.6, carbs: 16, gorduras: 0.2, porcao: "1 cacho pequeno"}
  ],
  
  vegetais: [
    // Folhosos
    {nome: "Brócolis", calorias: 34, proteinas: 2.8, carbs: 7, gorduras: 0.4, porcao: "100g"},
    {nome: "Espinafre", calorias: 23, proteinas: 2.9, carbs: 3.6, gorduras: 0.4, porcao: "100g"},
    {nome: "Couve", calorias: 49, proteinas: 4.3, carbs: 10, gorduras: 0.7, porcao: "100g"},
    {nome: "Alface", calorias: 15, proteinas: 1.4, carbs: 2.9, gorduras: 0.2, porcao: "100g"},
    {nome: "Rúcula", calorias: 25, proteinas: 2.6, carbs: 3.7, gorduras: 0.7, porcao: "100g"},
    {nome: "Acelga", calorias: 19, proteinas: 1.8, carbs: 3.7, gorduras: 0.2, porcao: "100g"},
    
    // Legumes
    {nome: "Tomate", calorias: 18, proteinas: 0.9, carbs: 3.9, gorduras: 0.2, porcao: "100g"},
    {nome: "Cenoura", calorias: 41, proteinas: 0.9, carbs: 10, gorduras: 0.2, porcao: "100g"},
    {nome: "Beterraba", calorias: 43, proteinas: 1.6, carbs: 10, gorduras: 0.2, porcao: "100g"},
    {nome: "Abobrinha", calorias: 17, proteinas: 1.2, carbs: 3.1, gorduras: 0.3, porcao: "100g"},
    {nome: "Berinjela", calorias: 25, proteinas: 1, carbs: 6, gorduras: 0.2, porcao: "100g"},
    {nome: "Pimentão", calorias: 31, proteinas: 1, carbs: 7, gorduras: 0.3, porcao: "100g"},
    {nome: "Cebola", calorias: 40, proteinas: 1.1, carbs: 9.3, gorduras: 0.1, porcao: "100g"},
    {nome: "Alho-poró", calorias: 61, proteinas: 1.5, carbs: 14, gorduras: 0.3, porcao: "100g"},
    
    // Crucíferas
    {nome: "Couve-flor", calorias: 25, proteinas: 1.9, carbs: 5, gorduras: 0.3, porcao: "100g"},
    {nome: "Repolho", calorias: 25, proteinas: 1.3, carbs: 6, gorduras: 0.1, porcao: "100g"},
    
    // Outros
    {nome: "Pepino", calorias: 16, proteinas: 0.7, carbs: 3.6, gorduras: 0.1, porcao: "100g"},
    {nome: "Aipo", calorias: 16, proteinas: 0.7, carbs: 3, gorduras: 0.2, porcao: "100g"},
    {nome: "Aspargo", calorias: 20, proteinas: 2.2, carbs: 3.9, gorduras: 0.1, porcao: "100g"}
  ],
  
  gorduras: [
    // Óleos
    {nome: "Azeite extra virgem", calorias: 126, proteinas: 0, carbs: 0, gorduras: 14, porcao: "1 colher sopa"},
    {nome: "Óleo de coco", calorias: 117, proteinas: 0, carbs: 0, gorduras: 13, porcao: "1 colher sopa"},
    {nome: "Óleo de linhaça", calorias: 120, proteinas: 0, carbs: 0, gorduras: 13.6, porcao: "1 colher sopa"},
    
    // Frutas oleaginosas
    {nome: "Abacate", calorias: 160, proteinas: 2, carbs: 9, gorduras: 15, porcao: "1/2 unidade"},
    {nome: "Coco fresco", calorias: 354, proteinas: 3.3, carbs: 15, gorduras: 33, porcao: "100g"},
    
    // Castanhas e nozes
    {nome: "Castanha do Pará", calorias: 197, proteinas: 4.2, carbs: 3.6, gorduras: 20, porcao: "30g"},
    {nome: "Castanha de caju", calorias: 166, proteinas: 5.4, carbs: 9.6, gorduras: 13, porcao: "30g"},
    {nome: "Amêndoas", calorias: 174, proteinas: 6.3, carbs: 6.6, gorduras: 15, porcao: "30g"},
    {nome: "Nozes", calorias: 196, proteinas: 4.5, carbs: 4.1, gorduras: 20, porcao: "30g"},
    {nome: "Amendoim", calorias: 170, proteinas: 7.8, carbs: 4.8, gorduras: 15, porcao: "30g"},
    {nome: "Pistache", calorias: 162, proteinas: 6, carbs: 7.8, gorduras: 13, porcao: "30g"},
    {nome: "Avelã", calorias: 188, proteinas: 4.5, carbs: 4.8, gorduras: 18, porcao: "30g"},
    
    // Sementes
    {nome: "Semente de girassol", calorias: 175, proteinas: 6.2, carbs: 6, gorduras: 15, porcao: "30g"},
    {nome: "Semente de abóbora", calorias: 170, proteinas: 8.8, carbs: 4.2, gorduras: 14, porcao: "30g"},
    {nome: "Chia", calorias: 146, proteinas: 4.9, carbs: 12, gorduras: 9.3, porcao: "30g"},
    {nome: "Linhaça", calorias: 160, proteinas: 5.4, carbs: 8.7, gorduras: 12.6, porcao: "30g"},
    
    // Outros
    {nome: "Pasta de amendoim integral", calorias: 184, proteinas: 7.5, carbs: 6.9, gorduras: 15, porcao: "30g"},
    {nome: "Tahine (pasta de gergelim)", calorias: 178, proteinas: 5.1, carbs: 6.3, gorduras: 16, porcao: "30g"}
  ]
};