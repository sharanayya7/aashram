import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    // Scroll button flag
  showScrollButton = false;
    // 🔹 Scroll detection
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop || 0;

    this.showScrollButton = scrollPosition > 300;
  }

  // 🔹 Scroll smoothly to top
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
