import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  menuOpen = false;
  navLinks = [
    { label: 'Accueil', anchor: 'home' },
    { label: 'À propos', anchor: 'about' },
    { label: 'Projets', anchor: 'projects' },
    { label: 'Compétences', anchor: 'skills' },
    { label: 'Contact', anchor: 'contact' },
  ];

  scrollTo(anchor: string) {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
