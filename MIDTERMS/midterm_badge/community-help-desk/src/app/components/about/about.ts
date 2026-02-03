import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  template: `
    <div style="padding: 20px;">
      <h2>{{ 'About This Portal' | uppercase }}</h2>
      <p>This is a sample Angular SPA demonstrating routing, shared services, observables, and pipes.</p>
      <hr>
      <p><strong>Today:</strong> {{ today | date:'fullDate' }}</p>
    </div>
  `
})
export class AboutComponent {
  today = new Date();
}
