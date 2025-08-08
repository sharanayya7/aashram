import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // <-- Add this import

const routes: Routes = [
  // Add your routes here. For now, just a default route:
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent // <-- Add this declaration
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule // <-- Add RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }