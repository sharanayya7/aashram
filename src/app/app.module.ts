import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopNgoComponent } from './top-ngo/top-ngo.component';
import { NgoRequestFormComponent } from './ngo-request-form/ngo-request-form.component';
import { HomeComponent } from './pages/home/home.component';
import { WhyNgoComponent } from './why-ngo/why-ngo.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Redirect to top NGO on default route
  { path: 'top-ngo', component: TopNgoComponent },
  { path: 'new-ngo', component: NgoRequestFormComponent }, 
  { path: 'why-ngo',component: WhyNgoComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,        // ✅ For [(ngModel)] two-way binding
    HttpClientModule,   // ✅ For HttpClient (loading JSON)
    RouterModule.forRoot(routes), // ✅ Only one RouterModule.forRoot
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
