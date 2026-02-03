import { Component, inject } from '@angular/core';
import { AsyncPipe, SlicePipe, CommonModule } from '@angular/common';
import { DataService, Post } from '../../services/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, SlicePipe, CommonModule],
  template: `
    <div style="padding: 20px;">
      <div style="margin-bottom: 30px;">
        <h1 style="font-size: 2.5rem; margin-bottom: 10px;">COMMAND CENTER</h1>
        <p style="color: #a0a0a0;">Welcome, Agent. Select a protocol or review latest intel.</p>
      </div>

      <div class="bento-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 40px;">

        <button class="glass-card action-btn" (click)="triggerAction('ticket')">
          <span style="font-size: 2rem;">📝</span><br>
          LOG NEW TICKET
        </button>

        <button class="glass-card action-btn" (click)="triggerAction('status')">
          <span style="font-size: 2rem;">wi-fi</span><br> SYSTEM STATUS
        </button>

        <button class="glass-card action-btn" (click)="triggerAction('chat')">
          <span style="font-size: 2rem;">💬</span><br>
          LIVE AGENT CHAT
        </button>

      </div>

      <h3>LATEST UPDATES</h3>
      <div *ngIf="posts$ | async as posts; else loading" class="bento-grid">
        <div *ngFor="let post of posts | slice:0:3" class="glass-card">
          <span class="card-badge">UPDATE</span>
          <h3>{{ post.title | slice:0:30 }}...</h3>
          <p>{{ post.body | slice:0:80 }}...</p>
        </div>
      </div>

      <ng-template #loading>
        <p style="color: var(--neon-main);">[ LOADING DASHBOARD... ]</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .action-btn {
      text-align: center;
      font-size: 1rem;
      color: #fff;
      transition: 0.2s;
    }
    .action-btn:hover {
      background: rgba(0, 255, 65, 0.1);
      border-color: var(--neon-main);
    }
  `]
})
export class HomeComponent {
  private dataService = inject(DataService);
  posts$: Observable<Post[]> = this.dataService.getPosts();

  triggerAction(action: string) {
    alert(`[SYSTEM]: Initiating ${action.toUpperCase()} protocol...`);
  }
}
