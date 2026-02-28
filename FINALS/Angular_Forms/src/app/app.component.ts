import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. Import your existing demo components
import { TemplateDemoComponent } from './template-demo/template-demo.component';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo.component';
import { RegisterComponent } from './register/register.component';

// 2. Add the NEW Challenge component for Activity 5
import { ChallengeFormComponent } from './challenge-form/challenge-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // 3. Add ChallengeFormComponent to this imports list
  imports: [
    RouterOutlet, 
    TemplateDemoComponent, 
    ReactiveDemoComponent, 
    RegisterComponent,
    ChallengeFormComponent 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Forms';
}