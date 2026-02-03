import { Component, inject } from '@angular/core';
import { AsyncPipe, SlicePipe, CommonModule } from '@angular/common';
import { DataService, Post } from '../../services/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import map operator

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, SlicePipe, CommonModule],
  template: `
    <div style="padding: 20px;">
      <div style="margin-bottom: 40px;">
        <h1 style="font-size: 2.5rem; margin-bottom: 10px;">OPERATIONAL DASHBOARD</h1>
        <p style="color: #a0a0a0; max-width: 600px; line-height: 1.6;">
          Welcome to the Community Help Desk. This secure portal allows agents to track active incidents,
          search the global knowledge base, and dispatch support tickets.
          <span style="color: var(--neon-main)">System status is normal.</span>
        </p>
      </div>

      <div class="bento-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 50px;">

        <button class="glass-card action-btn" (click)="triggerAction('ticket')">
          <span style="font-size: 2.5rem;">📝</span><br>
          <strong style="display: block; margin-top: 10px; color: #fff;">SUBMIT TICKET</strong>
          <span style="font-size: 0.8rem; color: #888;">Report a new incident</span>
        </button>

        <button class="glass-card action-btn" (click)="triggerAction('status')">
          <span style="font-size: 2.5rem;">📡</span><br>
          <strong style="display: block; margin-top: 10px; color: #fff;">NETWORK STATUS</strong>
          <span style="font-size: 0.8rem; color: #888;">Check connectivity</span>
        </button>

        <button class="glass-card action-btn" (click)="triggerAction('chat')">
          <span style="font-size: 2.5rem;">💬</span><br>
          <strong style="display: block; margin-top: 10px; color: #fff;">LIVE SUPPORT</strong>
          <span style="font-size: 0.8rem; color: #888;">Connect with an admin</span>
        </button>

      </div>

      <h3 style="border-bottom: 1px solid #333; padding-bottom: 10px; margin-bottom: 20px;">RECENT SYSTEM BROADCASTS</h3>

      <div *ngIf="posts$ | async as posts; else loading" class="bento-grid">
        <div *ngFor="let post of posts" class="glass-card">
          <span class="card-badge">ANNOUNCEMENT</span>
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </div>
      </div>

      <ng-template #loading>
        <p style="color: var(--neon-main);">[ SYNCING DATA STREAM... ]</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .action-btn {
      text-align: center;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 160px;
    }
    .action-btn:hover {
      background: rgba(0, 255, 65, 0.08);
      border-color: var(--neon-main);
      transform: translateY(-5px);
    }
  `]
})
export class HomeComponent {
  private dataService = inject(DataService);

  // Here is the magic: We fetch the data, but SWAP the text with our own!
  posts$: Observable<Post[]> = this.dataService.getPosts().pipe(
    map(posts => {
      // Take the first 3 posts
      const top3 = posts.slice(0, 3);

      // Overwrite them with meaningful Gamer/Tech text
      top3[0].title = "SYSTEM MAINTENANCE COMPLETE";
      top3[0].body = "The scheduled server migration for Sector 7 has been successfully completed. All nodes are back online with improved latency.";

      top3[1].title = "NEW SECURITY PROTOCOLS";
      top3[1].body = "All agents are required to update their encryption keys by 2300 hours. Failure to comply will result in temporary access suspension.";

      top3[2].title = "DOWNTIME WARNING";
      top3[2].body = "Intermittent connectivity expected in the Asia-Pacific region due to sub-sea cable repairs. Please route traffic through US-West.";

      return top3;
    })
  );

  triggerAction(action: string) {
    alert(`[SYSTEM]: Initializing ${action.toUpperCase()} protocol...`);
  }
}
