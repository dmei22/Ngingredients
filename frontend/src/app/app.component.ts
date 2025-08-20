import { Component, OnInit, signal} from '@angular/core';
import { Recipe } from './recipe';
import { AppService } from './app.service';
import { catchError, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    FormsModule,
    RouterOutlet,
    RouterModule
  ],
  styleUrl: './app.component.css'
})
export class AppComponent{

}
