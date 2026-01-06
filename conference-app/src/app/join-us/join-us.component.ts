import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- Import this
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [CommonModule, FormsModule], // <--- Add CommonModule here
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.css'
})
export class JoinUsComponent {
  firstName: string = 'Josh';
  lastName: string = 'Aguiluz';
  email: string = 'josh.dizon.aguiluz25@gmail.com';
  institution: string = 'Holy Angel University';
}
