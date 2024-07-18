import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Lesson3Component } from './lesson3/lesson3.component';  // Додайте цей імпорт
import { ChildComponent } from './lesson3/child/child.component';  // Додайте цей імпорт

@NgModule({
  declarations: [
    AppComponent,
    Lesson3Component,
    ChildComponent  // Додайте компоненти до секції declarations
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
