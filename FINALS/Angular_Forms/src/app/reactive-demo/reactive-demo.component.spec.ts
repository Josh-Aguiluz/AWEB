import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-demo.component.html',
  styleUrls: ['./reactive-demo.component.css']
})
export class ReactiveDemoComponent {
  title = 'Reactive Form Demo';
  roles = ['Admin', 'User', 'Guest'];
  form!: FormGroup;

  // This will store the data to show on the right side when submitted
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      role: ['', Validators.required],

      // The 3 required extra fields
      gender: ['', Validators.required],
      status: ['', Validators.required],
      comments: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      // If there are errors, show them
      this.form.markAllAsTouched();
    } else {
      // If successful, save the data to display on the right
      this.submittedData = this.form.value;
    }
  }

  // Helper method to easily check for errors in the HTML
  isInvalid(name: string) {
    const control = this.form.get(name);
    return control?.touched && control?.invalid;
  }
}
