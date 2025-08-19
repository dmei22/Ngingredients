import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Recipe} from './recipe';
import {AppService} from './app.service';
import {catchError, of, tap} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    FormsModule
  ],
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  protected readonly title = signal('Ngredients');

  public recipes : Recipe[] = [];


  constructor(private recipeService : AppService) {
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

  public onAddRecipe(addForm: NgForm) {
    document.getElementById("close-add-recipe-modal")?.click();

    this.recipeService.addRecipe(addForm.value)
      .pipe(
        tap((response: Recipe) => {
          addForm.reset();
          console.log(response);
          this.getRecipes();
        }),
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return of(null);
        })
      ).subscribe();
  }
}
