import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addRecipe(recipeData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create/`, recipeData);
  }
}