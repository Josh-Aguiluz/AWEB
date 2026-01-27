import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpclientService } from './httpclient.service';
import { User } from './user.model';
import { Quote } from './quote.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Combined Activity';
  httpUsers: User[] = [];
  httpQuotes: Quote[] = [];

  constructor(private httpService: HttpclientService) {}

  ngOnInit(): void {
    // Fetch Users
    this.httpService.getUsersRemotely().subscribe((data) => {
      this.httpUsers = data;
    });

    // Fetch Quotes
    this.httpService.getQuotesRemotely().subscribe((data) => {
      this.httpQuotes = data.quotes;
    });
  }
}
