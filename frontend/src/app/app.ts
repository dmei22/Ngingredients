import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Recipe} from './recipe';
import {RecipeService} from './recipe.service';
import {catchError, of, tap} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  protected readonly title = signal('Ngredients');

  public recipes : Recipe[] = [];


  constructor(private recipeService : RecipeService) {
  }

  ngOnInit() {
    this.getRecipes();
  }

  private getRecipes() {
    this.recipeService.getRecipes()
      .pipe(
        tap((response: Recipe[]) => {
          this.recipes = response;
          console.log(response);
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return of([]);
        })
      )
      .subscribe();
  }

}
