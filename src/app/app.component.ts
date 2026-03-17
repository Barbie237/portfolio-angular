import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <div class="relative min-h-screen bg-dark text-light overflow-x-hidden">
      <!-- Animated background blobs -->
      <div class="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div class="blob blob1"></div>
        <div class="blob blob2"></div>
        <div class="blob blob3"></div>
        <div class="blob blob4"></div>
      </div>
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.12;
      animation: float 20s infinite ease-in-out;
    }
    .blob1 { width: 500px; height: 500px; background: #FF6B9D; top: 5%; left: 5%; animation-delay: 0s; }
    .blob2 { width: 400px; height: 400px; background: #C239B3; top: 50%; right: 5%; animation-delay: 5s; }
    .blob3 { width: 450px; height: 450px; background: #FEC163; bottom: 10%; left: 35%; animation-delay: 10s; }
    .blob4 { width: 300px; height: 300px; background: #8B5CF6; top: 70%; right: 25%; animation-delay: 15s; }
    @keyframes float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(60px, -60px) scale(1.1); }
      66% { transform: translate(-60px, 60px) scale(0.9); }
    }
  `]
})
export class AppComponent {}
