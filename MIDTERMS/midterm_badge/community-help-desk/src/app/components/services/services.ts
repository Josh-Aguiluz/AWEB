import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Post } from '../../services/data';
import { combineLatest, Observable, BehaviorSubject, map } from 'rxjs';
import { TruncatePipe } from '../../pipes/truncate.pipe'; // Check your filename! (dash vs dot)

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, TruncatePipe],
  template: `
    <div style="padding: 20px;">
      <div style="margin-bottom: 30px;">
        <h1>GLOBAL KNOWLEDGE BASE</h1>
        <p style="color: #888;">Access the central database of resolved issues and active service protocols.</p>
      </div>

      <div style="position: relative; margin-bottom: 40px;">
        <input
          type="text"
          placeholder="> SEARCH PROTOCOLS (e.g. 'Wifi', 'Login')..."
          [(ngModel)]="searchTerm"
          (ngModelChange)="onSearch($event)"
          style="width: 100%; padding: 15px 20px; font-size: 1.1rem; background: #050505; border: 1px solid #333; color: #fff;"
        >
        <div style="position: absolute; right: 15px; top: 18px; color: var(--neon-main); font-size: 0.8rem;">
          SECURE CONNECTION
        </div>
      </div>

      <div *ngIf="filteredPosts$ | async as posts; else loading" class="bento-grid">

        <div *ngFor="let post of posts" class="glass-card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <span class="card-badge">TICKET #{{ post.id }}</span>
            <span style="font-size: 0.75rem; color: var(--neon-main); letter-spacing: 1px;">
              ● RESOLVED
            </span>
          </div>

          <h3 style="margin-bottom: 10px; color: #fff;">{{ post.title }}</h3>
          <p style="color: #999; font-size: 0.9rem;">{{ post.body | truncate:100 }}</p>

          <button style="margin-top: 20px; width: 100%; font-size: 0.8rem;" (click)="accessService(post.title)">
            VIEW SOLUTION >
          </button>
        </div>

      </div>

      <ng-template #loading>
        <p style="color: var(--neon-main); text-align: center; margin-top: 50px;">[ ESTABLISHING UPLINK... ]</p>
      </ng-template>
    </div>
  `
})
export class ServicesComponent {
  private dataService = inject(DataService);
  searchTerm = '';
  private searchSubject = new BehaviorSubject<string>('');

  // Custom list of "Real" Help Desk Topics to cycle through
  private ticketTopics = [
    { title: "VPN CONNECTION FAILED", body: "User unable to establish secure tunnel to HQ. Error 800. Solution involves flushing DNS cache and resetting adapter credentials." },
    { title: "OUTLOOK SYNC ERROR", body: "Exchange server timeout. Emails stuck in Outbox. Re-imaging the profile resolved the latency issue." },
    { title: "WIFI AUTHENTICATION", body: "Guest network rejecting valid tokens. Access Point firmware update required on 3rd floor nodes." },
    { title: "BLUE SCREEN (BSOD)", body: "Critical system failure caused by incompatible GPU driver update. Rolled back to stable version v4.2." },
    { title: "PRINTER OFFLINE", body: "Marketing Dept printer responding with 'Paper Jam' despite empty tray. Sensor cleaning required." },
    { title: "ACCOUNT LOCKED", body: "User exceeded failed login attempts. Account unlocked after verifying identity via 2FA protocol." },
    { title: "SOFTWARE LICENSE EXPIRED", body: "Adobe Creative Cloud requesting renewal. License key updated in the central registry." },
    { title: "DATA RECOVERY REQUEST", body: "Accidental deletion of project files. Restored from 24-hour backup tape archive." },
    { title: "MONITOR NO SIGNAL", body: "DisplayPort cable faulty. Hardware replacement authorized for workstation #44." },
    { title: "FIREWALL BLOCKING ZOOM", body: "Video conferencing ports 8801-8802 blocked by strict policy. Exception added for Sales Team." }
  ];

  filteredPosts$: Observable<Post[]> = combineLatest([
    // 1. Get the data AND transform it immediately
    this.dataService.getPosts().pipe(
      map(posts => posts.map((post, index) => {
        // This math cycles through our 10 topics over and over for all 100 posts
        const topic = this.ticketTopics[index % this.ticketTopics.length];
        return { ...post, title: topic.title, body: topic.body };
      }))
    ),
    this.searchSubject
  ]).pipe(
    // 2. Filter the ALREADY transformed data
    map(([posts, term]) =>
      posts.filter(p => p.title.toLowerCase().includes(term.toLowerCase()))
    )
  );

  onSearch(term: string) {
    this.searchSubject.next(term);
  }

  accessService(title: string) {
    alert(`[ACCESS GRANTED]: Opening solution file for: ${title}...`);
  }
}
