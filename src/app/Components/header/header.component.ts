import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Stanje za mobilni meni (otvoren/zatvoren)
  isMenuOpen = false;
  
  // Stanje za scroll efekat
  isScrolled = false;

  // Decorator koji osluškuje scroll event na window objektu
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Postavlja isScrolled na true ako je stranica scrollovana više od 50px
    this.isScrolled = window.scrollY > 50;
  }

  // Metoda za toggle mobilnog menija
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Sprečava scroll na body-ju kada je meni otvoren
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  // Metoda za zatvaranje menija
  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }
}
