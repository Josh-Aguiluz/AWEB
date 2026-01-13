import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css'
})
export class PipesDemo implements OnInit {
  presentDate = new Date();
  price : number = 20000;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  testObject = { "name": "Josh", "role": "Student", "project": "Midterms" };
  percentage: number = 0.8567;
  simpleText: string = 'josh andrei aguiluz';

  time$ = interval(1000).pipe(map(() => new Date()));

  ngOnInit() { }
}
