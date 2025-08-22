import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Recipe} from './recipe';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  public getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiServerUrl}/recipe/all`);
  }

  public getRandomRecipeId(): Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/recipe/random`);
  }

  public getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiServerUrl}/recipe/find/${id}`);
  }

  public addRecipe(recipe : Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.apiServerUrl}/recipe/add`, recipe);
  }

  public updateRecipe(recipe : Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.apiServerUrl}/recipe/update`, recipe);
  }

  public deleteRecipe(recipeId : number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/recipe/delete/${recipeId}`);
  }

  public toggleRecipeFavourite(recipeId: number): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.apiServerUrl}/recipe/toggleFavourite/${recipeId}`, {});
  }

}
