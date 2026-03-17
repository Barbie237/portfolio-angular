import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contactItems = [
    { icon: '📧', label: 'Email', value: 'annebarbaratebu@gmail.com', sub: null },
    { icon: '📱', label: 'Téléphone', value: '+237 6 55 05 31 15', sub: null },
    { icon: '📍', label: 'Localisation', value: 'Yaoundé, Cameroun', sub: 'Télétravail ou présentiel' },
  ];
}
