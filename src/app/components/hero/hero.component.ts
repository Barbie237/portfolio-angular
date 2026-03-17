import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  techStack = ['Angular', 'React.js', 'Vue.js', 'Node.js', 'Playwright', 'Spring Boot', 'TailwindCSS'];
  stats = [
    { value: '4+', label: 'Années d\'exp.' },
    { value: '15+', label: 'Projets livrés' },
    { value: '8+', label: 'Certifications' },
  ];

  scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
