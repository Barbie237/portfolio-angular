import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  cards = [
    { icon: '💻', title: 'Expertise Full-Stack', text: 'Maîtrise complète du développement frontend (Angular, React, Vue.js) et backend (Node.js, Spring Boot). Capable de gérer l\'architecture complète d\'une application de A à Z.' },
    { icon: '🎯', title: 'Qualité & Tests', text: 'Spécialisée en tests automatisés avec Playwright, Cucumber et Allure. Je garantis des applications robustes, fiables et sans régression grâce à une démarche QA rigoureuse.' },
    { icon: '🚀', title: 'Méthodologie Agile', text: 'Expérience avérée en Scrum. Excellente communication client et animation des cérémonies Agile avec suivi Jira.' },
    { icon: '🎨', title: 'Design & UX', text: 'Création d\'interfaces élégantes avec TailwindCSS et Bootstrap. Élaboration de User Maps et User Journeys pour une expérience utilisateur optimale.' },
    { icon: '📚', title: 'Formation Continue', text: '8+ certifications professionnelles (Codecademy, Udemy). Toujours à jour avec les dernières technologies (Angular 19, Next.js, TailwindCSS).' },
    { icon: '🤝', title: 'Travail d\'Équipe', text: 'Excellente collaboration avec les équipes Backend, participation active aux réunions clients, et capacité à travailler en télétravail ou présentiel.' },
  ];
}
