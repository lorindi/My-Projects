import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  addRecipe(recipeData: any): Observable<any> {
    const authToken = this.authService.getToken();

    if (!authToken) {
      throw new Error('Authentication token not found');
    }

    return this.http.post<any>(`${this.apiUrl}/recipe/create/`, recipeData, {
      headers: { Authorization: `Token ${authToken}` },
    });
  }
}
