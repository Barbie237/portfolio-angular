import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styles: [`
    .skill-bar {
      animation: fillBar 1.5s ease-out forwards;
    }
    @keyframes fillBar {
      from { width: 0; }
    }
  `]
})
export class SkillsComponent {
  categories = [
    {
      icon: '🖥️', title: 'Frontend',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'React.js', level: 88 },
        { name: 'Vue.js', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'TailwindCSS', level: 95 },
      ]
    },
    {
      icon: '🧪', title: 'QA & Testing',
      skills: [
        { name: 'Playwright', level: 90 },
        { name: 'Cucumber', level: 88 },
        { name: 'Allure', level: 85 },
        { name: 'Tests E2E', level: 92 },
      ]
    },
    {
      icon: '⚙️', title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Spring Boot', level: 75 },
        { name: 'PHP', level: 78 },
        { name: 'Python/Django', level: 72 },
      ]
    },
    {
      icon: '🛠️', title: 'Outils & DevOps',
      skills: [
        { name: 'Git/GitHub', level: 93 },
        { name: 'Jira/Trello', level: 90 },
        { name: 'Postman', level: 88 },
        { name: 'Firebase', level: 85 },
      ]
    },
    {
      icon: '📐', title: 'Méthodologies',
      skills: [
        { name: 'Agile/Scrum', level: 92 },
        { name: 'UML/MERISE', level: 85 },
        { name: 'BPMN', level: 88 },
        { name: 'Clean Architecture', level: 83 },
      ]
    },
    {
      icon: '🗄️', title: 'Bases de Données',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'Firebase/Firestore', level: 88 },
        { name: 'MongoDB', level: 80 },
      ]
    },
  ];
}
