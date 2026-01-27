import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  // URLs with limits
  private usersUrl = 'https://jsonplaceholder.typicode.com/users?_limit=5';
  private quotesUrl = 'https://dummyjson.com/quotes?limit=5';

  constructor(private http: HttpClient) { }

  // 1. Fetch Users (With Caching)
  getUsersRemotely(): Observable<User[]> {
    const cachedUsers = localStorage.getItem('users');

    if (cachedUsers) {
      return of(JSON.parse(cachedUsers));
    }

    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(users => localStorage.setItem('users', JSON.stringify(users)))
    );
  }

  // 2. Fetch Quotes
  getQuotesRemotely(): Observable<any> {
    return this.http.get<any>(this.quotesUrl);
  }
}
