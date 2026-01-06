import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
  partners = [
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      tier: 'Platinum',
      website: 'https://www.microsoft.com'
    },
    {
      name: 'Apple, Inc.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      tier: 'Gold',
      website: 'https://www.apple.com'
    },
    {
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      tier: 'Silver',
      website: 'https://www.amazon.com'
    },
    {
      name: 'Google, Inc.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      tier: 'Bronze',
      website: 'https://www.google.com'
    }
  ];

  // This handles the "Click" event to open the website
  navigateTo(url: string) {
    window.open(url, '_blank');
  }
}
