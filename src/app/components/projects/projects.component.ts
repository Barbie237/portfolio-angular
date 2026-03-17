import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects: Project[];

  constructor(private projectService: ProjectService, private router: Router) {
    this.projects = this.projectService.getAll();
  }

  openProject(id: string) {
    this.router.navigate(['/project', id]);
  }
}
