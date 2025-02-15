import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { LogintoComponent } from '../../loginto/loginto.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
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
  constructor(private dialog: MatDialog) {}

  openRegisterDialog() {
    this.dialog.open(LoginComponent, {
      width: '400px', // Možeš prilagoditi širinu
      disableClose: true // Ako želiš da korisnik mora da klikne dugme da bi zatvorio
    });
  }

  openLoginDialog() {
    this.dialog.open(LogintoComponent, {
      width: '400px', // Možeš prilagoditi širinu
      disableClose: true // Ako želiš da korisnik mora da klikne dugme da bi zatvorio
    });
  }
  // Metoda za zatvaranje menija
  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }
  ngOnInit() {}
}
