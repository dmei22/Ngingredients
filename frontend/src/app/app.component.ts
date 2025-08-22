import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router, RouterOutlet} from '@angular/router';
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

  constructor(public router: Router) {
  }

}
