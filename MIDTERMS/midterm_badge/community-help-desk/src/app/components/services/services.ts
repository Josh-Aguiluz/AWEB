import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Post } from '../../services/data';
import { combineLatest, Observable, BehaviorSubject, map } from 'rxjs';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, TruncatePipe],
  template: `
    <div style="padding: 20px;">
      <h1>SERVICE STATUS PORTAL</h1>

      <input
        type="text"
        placeholder="> FILTER_SERVICES..."
        [(ngModel)]="searchTerm"
        (ngModelChange)="onSearch($event)"
        style="width: 100%; margin-bottom: 30px; font-size: 1.1rem;"
      >

      <div *ngIf="filteredPosts$ | async as posts; else loading" class="bento-grid">

        <div *ngFor="let post of posts" class="glass-card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <span class="card-badge">ID: {{ post.id }}</span>

            <span style="font-size: 0.8rem; color: var(--neon-main); display: flex; align-items: center; gap: 5px;">
              <span class="status-dot"></span> ONLINE
            </span>
          </div>

          <h3>{{ post.title }}</h3>
          <p>{{ post.body | truncate:100 }}</p>

          <button style="margin-top: 15px; width: 100%;" (click)="accessService(post.title)">
            ACCESS SERVICE >
          </button>
        </div>

      </div>

      <ng-template #loading>
        <p style="color: var(--neon-main);">[ ESTABLISHING CONNECTION... ]</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .status-dot {
      width: 8px; height: 8px;
      background-color: var(--neon-main);
      border-radius: 50%;
      box-shadow: 0 0 5px var(--neon-main);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.5; }
      100% { opacity: 1; }
    }
  `]
})
export class ServicesComponent {
  private dataService = inject(DataService);
  searchTerm = '';
  private searchSubject = new BehaviorSubject<string>('');

  filteredPosts$: Observable<Post[]> = combineLatest([
    this.dataService.getPosts(),
    this.searchSubject
  ]).pipe(
    map(([posts, term]) =>
      posts.filter(p => p.title.toLowerCase().includes(term.toLowerCase()))
    )
  );

  onSearch(term: string) {
    this.searchSubject.next(term);
  }

  accessService(title: string) {
    alert(`[ACCESS GRANTED]: connecting to ${title}...`);
  }
}
