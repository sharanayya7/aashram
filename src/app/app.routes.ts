import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Your AppComponent
import { TopNgoComponent } from './top-ngo/top-ngo.component';

const routes: Routes = [
  // { path: '', component: AppComponent }, // Default route
  // { path: 'top-ngo', component: TopNgoComponent }, // Example route for home
  // ... other routes for other components
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
