import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-challenge-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  templateUrl: './challenge-form.component.html',
  styleUrl: './challenge-form.component.css'
})
export class ChallengeFormComponent {
  challengeForm: FormGroup;
  isDarkMode = true;
  submitted = false; // Prevents results from showing automatically
  maxDate = new Date(2006, 11, 31); // Rule: Born 2006 or earlier

  constructor(private fb: FormBuilder) {
    this.challengeForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Rule: Starts with letter, alphanumeric, min 8 chars
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]*$/)
      ]],
      dob: ['', Validators.required]
    });
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  onSubmit() {
    if (this.challengeForm.valid) {
      this.submitted = true; // Triggers the results display
    }
  }
}