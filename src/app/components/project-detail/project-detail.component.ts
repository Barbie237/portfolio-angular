import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  lightboxIndex: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.project = this.projectService.getById(id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goBack() {
    this.router.navigate(['/']);
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  openLightbox(index: number) {
    this.lightboxIndex = index;
  }

  closeLightbox() {
    this.lightboxIndex = null;
  }

  prevShot(event: Event) {
    event.stopPropagation();
    if (this.lightboxIndex !== null && this.lightboxIndex > 0) {
      this.lightboxIndex--;
    }
  }

  nextShot(event: Event) {
    event.stopPropagation();
    if (this.project && this.lightboxIndex !== null && this.lightboxIndex < this.project.screenshots.length - 1) {
      this.lightboxIndex++;
    }
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://placehold.co/800x500/1A1A2E/FF6B9D?text=Screenshot+non+disponible';
  }
}
