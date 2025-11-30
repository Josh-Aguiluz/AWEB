import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // <--- MUST BE HERE
  imports: [RouterOutlet, RouterLink], // <--- MUST BE HERE
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'angular-routing-lab';
}