import { Component, inject } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Recipe} from '../../recipe';
import {AppService} from '../../app.service';
import {catchError, of, tap} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-details-component',
  imports: [],
  templateUrl: './details-component.html',
  styleUrl: './details-component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  recipeId : number;
  recipe!: Recipe;

  constructor(private recipeService : AppService) {
    this.recipeId = Number(this.route.snapshot.params["id"])
    this.getRecipeById(this.recipeId);
  }

  private getRecipeById(id: number) {
    this.recipeService.getRecipeById(id)
      .pipe(
        tap((response: Recipe) => {
          this.recipe = response;
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
