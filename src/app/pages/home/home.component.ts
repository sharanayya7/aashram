import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface NGO {
  name: string;
  website: string;
  state: string;
  city: string;
  rating: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  title = 'NGO Directory';
  ngos: NGO[] = [];   // 🔹 You forgot to declare this earlier
  statesAndCities: any[] = []; // 🔹 Adjusted type to any[] for flexibility
  selectedState: string = '';
  filteredCities: string[] = [];

  constructor(private http: HttpClient,
    private router: Router,
  ) { }

  // 🔹 Angular lifecycle hook
  ngOnInit(): void {
    // this.http.get<NGO[]>('assets/data/ngos.json').subscribe(data => {
    //   this.ngos = data;
    // });
    this.http.get('assets/JSON/state-city.json').subscribe(Addressdata => {
      this.statesAndCities = Addressdata as any[]; // 🔹 Adjusted type to any[]
    });
  }
  // 🔹 State and city data
  onStateChange(state: string) {
    this.selectedState = state;
    const stateObj = this.statesAndCities.find(s => s.state === state);
    this.filteredCities = stateObj ? stateObj.city : [];
  }

  onTopNgoClick() {
    // 🔹 Navigate to the top NGO page
    this.router.navigate(['/top-ngo']);
  }
  onWhyNgoClick() {
    this.router.navigate(['/why-ngo'])
  }
  onNgoRequestFormClick() {
    this.router.navigate(['/new-ngo'])
  }
}