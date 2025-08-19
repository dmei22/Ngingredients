import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent
  ],
  providers: [AppService]
})
export class AppModule { }
