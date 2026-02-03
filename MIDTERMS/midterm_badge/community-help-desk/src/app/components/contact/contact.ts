import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe, JsonPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, JsonPipe, CommonModule],
  template: `
    <div style="padding: 20px; max-width: 900px; margin: 0 auto;">

      <div *ngIf="isSubmitted" class="glass-card" style="text-align: center; border-color: var(--neon-main);">
        <h2 style="color: var(--neon-main); margin-bottom: 10px;">TRANSMISSION SUCCESSFUL</h2>
        <p>Reference ID: #{{ generateId() }}</p>
        <p>A support unit has been dispatched to your coordinates.</p>
        <button (click)="isSubmitted = false" style="margin-top: 20px;">OPEN NEW CHANNEL</button>
      </div>

      <div *ngIf="!isSubmitted" style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">

        <div class="glass-card">
          <h2 style="margin-bottom: 20px; border-bottom: 1px solid #333; padding-bottom: 10px;">OPEN NEW TICKET</h2>

          <label>AGENT NAME *</label>
          <input [(ngModel)]="name" placeholder="Enter identification..." style="width: 100%; margin-bottom: 15px;">

          <label>SECURE COMMS ID (EMAIL) *</label>
          <input [(ngModel)]="email" placeholder="agent@command.net" style="width: 100%; margin-bottom: 15px;">

          <label>PRIORITY LEVEL</label>
          <select [(ngModel)]="priority" style="width: 100%; margin-bottom: 15px; padding: 12px; background: #050505; color: #fff; border: 1px solid var(--neon-dim); border-radius: 4px;">
            <option>LOW - ROUTINE</option>
            <option>MEDIUM - STANDARD</option>
            <option>HIGH - CRITICAL FAILURE</option>
          </select>

          <label>INCIDENT LOG *</label>
          <textarea [(ngModel)]="message" rows="5" placeholder="Describe the anomaly..." style="width: 100%; margin-bottom: 20px;"></textarea>

          <button (click)="submit()" style="width: 100%;">TRANSMIT TICKET</button>
        </div>

        <div class="glass-card" style="opacity: 0.9; height: fit-content;">
          <h3 style="color: #888;">PREVIEWING TRANSMISSION...</h3>
          <hr style="border-color: #333; margin-bottom: 20px;">

          <p><strong style="color: var(--neon-main)">AGENT:</strong> {{ name | uppercase }}</p>
          <p><strong style="color: var(--neon-main)">COMMS:</strong> {{ email }}</p>
          <p><strong style="color: var(--neon-main)">PRIORITY:</strong> {{ priority }}</p>

          <div style="margin-top: 15px;">
             <strong style="color: var(--neon-main)">DATA PACKET:</strong>
             <p style="background: rgba(0,0,0,0.5); padding: 15px; border-left: 2px solid var(--neon-main); margin-top: 5px; color: #ccc;">
               {{ message }}
             </p>
          </div>

          <br>
          <small style="color: #555; display: block; margin-bottom: 5px;">ENCRYPTED JSON STREAM:</small>
          <pre style="font-size: 0.75rem; color: #00ff41; background: #000; padding: 10px; overflow-x: auto;">{{ {agent: name, email: email, level: priority} | json }}</pre>
        </div>
      </div>

    </div>
  `
})
export class ContactComponent {
  name = '';
  email = '';
  priority = 'LOW - ROUTINE';
  message = '';
  isSubmitted = false;

  submit() {
    if(this.name && this.email && this.message) {
      this.isSubmitted = true;
    } else {
      alert('ERROR: MANDATORY FIELDS (NAME, EMAIL, MESSAGE) MISSING');
    }
  }

  // This was missing!
  generateId() {
    return Math.floor(Math.random() * 999999);
  }
}
