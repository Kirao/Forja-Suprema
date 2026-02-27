export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  rarity: 'Lendário' | 'Épico' | 'Raro';
  material: string;
  description: string;
}

export interface CartItem extends Product {
  quantity?: number;
}

export type RarityType = 'Lendário' | 'Épico' | 'Raro';
