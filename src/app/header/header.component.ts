import { Component } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Aashram NGO';
  isMenuOpen = false;
  faBars = faBars;
  faTimes = faTimes;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}