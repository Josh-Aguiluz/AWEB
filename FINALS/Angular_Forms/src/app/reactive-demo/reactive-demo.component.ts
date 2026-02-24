import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // This tells Angular to use Reactive Forms and *ngIf
  templateUrl: './reactive-demo.component.html',
  styleUrl: './reactive-demo.component.css'
})
export class ReactiveDemoComponent {
  title = 'Reactive Form Demo';
  roles = ['Admin', 'User', 'Guest'];
  form!: FormGroup;

  // This variable fixes your error! It holds the data after you click submit.
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    // This sets up all your inputs and checks if they are valid
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      role: ['', Validators.required],

      // Your 3 extra fields
      gender: ['', Validators.required],
      status: ['', Validators.required],
      comments: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      // Show red errors if the form is empty or wrong
      this.form.markAllAsTouched();
    } else {
      // Save the typed data so the HTML can show it on the right side
      this.submittedData = this.form.value;
    }
  }

  // A quick helper to check if an input has an error
  isInvalid(name: string) {
    const control = this.form.get(name);
    return control?.touched && control?.invalid;
  }
}
