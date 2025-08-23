export interface Recipe {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  ingredients: string;
  instructions: string;
  preparationTime: string;
  isFavourite: boolean;
}
