import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IRecipe } from '../types/recipe';
// import { Post } from './types/post';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //   THEMES
  getRecipes() {
    const { apiUrl } = environment;
    return this.http.get<IRecipe[]>(`${apiUrl}/recipe`);
  }

  getRecipe(id: string) {
    const { apiUrl } = environment;
    return this.http.get<IRecipe>(`${apiUrl}/recipe/${id}`);
  }

  createRecipe(recipeName: string, postText: string) {
    return this.http.post<IRecipe>(`/api/recipe`, { recipeName, postText });
  }

  updateRecipe(RecipeId: string, postId: string, postText: string) {
    return this.http.put<IRecipe>(`/api/recipe/${RecipeId}/posts/${postId}`, {
      postText,
    });
  }

  deleteRecipe(themeId: string, postId: string) {
    return this.http.delete<IRecipe>(`/api/recipe/${themeId}/posts/${postId}`);
  }

}