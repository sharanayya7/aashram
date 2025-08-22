import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
interface NGO {
  name: string;
  website: string;
  state: string;
  city: string;
  rating: number;
}

interface City {
  name: string;
  ngos: NGO[];
}

interface State {
  state: string;
  cities: City[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'NGO Directory';
  
  statesAndCities: State[] = [];
  filteredCities: City[] = [];
  filteredNgos: NGO[] = [];

  selectedState: string = '';
  selectedCity: string = '';

  constructor(private http: HttpClient,
    private router: Router,
  ) { }

 ngOnInit(): void {
    this.http.get<State[]>('assets/ngos.json').subscribe(data => {
      this.statesAndCities = data;
    });
  }

  // ✅ method exists now
  onStateChange(stateName: string) {
    const state = this.statesAndCities.find(s => s.state === stateName);
    this.filteredCities = state ? state.cities : [];
    this.filteredNgos = [];
    this.selectedCity = '';
  }

  // ✅ method exists now
  onCityChange(cityName: string) {
    const city = this.filteredCities.find(c => c.name === cityName);
    this.filteredNgos = city ? city.ngos : [];
  }



  onTopNgoClick() {
    this.router.navigate(['/top-ngo']);
  }
  onWhyNgoClick() {
    this.router.navigate(['/why-ngo'])
  }
  onNgoRequestFormClick() {
    this.router.navigate(['/new-ngo'])
  }
}