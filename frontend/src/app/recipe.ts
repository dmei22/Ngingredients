export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  instructions: string;
  preparationTime: string;
  isFavourite: boolean;
}
