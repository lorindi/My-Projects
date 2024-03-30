import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import { IRecipe } from '../types/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  addRecipe(recipeData: IRecipe): Observable<any> {
    const authToken = this.authService.getToken();

    if (!authToken) {
      throw new Error('Authentication token not found');
    }

    return this.http.post<any>(`${this.apiUrl}/recipe/create/`, recipeData, {
      headers: { Authorization: `Token ${authToken}` },
    });
  }
}
