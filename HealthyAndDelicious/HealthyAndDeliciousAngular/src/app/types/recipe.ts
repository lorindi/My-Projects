export interface IRecipe {
  image: string | null;
  title: string;
  description: string;
  category: string;
  ingredients: string;
  prep_time: string;
  cook_time: string;
  servings: string;
  creation_time: string;
  creator: number;
}
