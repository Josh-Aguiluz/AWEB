import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for ngModel

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import FormsModule here
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  
  // --- Section 1: Note Visibility ---
  isStaticNoteVisible: boolean = false;
  isNoteVisible: boolean = true;
  isParagraphVisible: boolean = true;

  // Methods for Note Visibility
  showNote() {
    this.isNoteVisible = true;
  }
  hideNote() {
    this.isNoteVisible = false;
  }
  toggleNote() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }

  // --- Section 2: Month Checks ---
  monthNameStatic: string = 'Mar';
  monthNameDynamic: string = 'Mar';

  // --- Section 3: City List Array ---
  cityList: string[] = ["Angeles", "San Fernando", "Mabalacat", "Tarlac", "Bataan"];

  // --- Section 4: Student List Array ---
  studentList: any[] = [
    { stud_name: 'D Esquivel', course: 'Web Development', isActive: false },
    { stud_name: 'J Dizon', course: 'Network Administration', isActive: false },
    { stud_name: 'F Alejandro', course: 'Systems Development', isActive: false },
    { stud_name: 'J David', course: 'CyberSecurity', isActive: false },
    { stud_name: 'C Quintana', course: 'Web Development', isActive: true },
  ];
}