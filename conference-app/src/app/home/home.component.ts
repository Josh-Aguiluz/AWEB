import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Hero Section Data
  title = "Research Conferences";
  subTitle = "Join our online events this 2026!";
  heroImage = "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  // Cards Data
  cities = [
    {
      name: 'France',
      desc: 'The largest country in Western Europe, has long been a gateway between northern and southern regions.',
      category: 'Architecture and Fine Arts',
      img: 'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Seoul',
      desc: 'Korean Soul, Special City of Seoul. The capital of South Korea.',
      category: 'Humanities and Arts',
      img: 'https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'San Francisco',
      desc: 'A cultural and financial centre of the western United States and one of the country\'s most cosmopolitan cities.',
      category: 'Science and Technology',
      img: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Boston',
      desc: 'Best known for its famous baked beans, Fenway Park, and The Boston Marathon.',
      category: 'Engineering and Tech',
      img: 'https://images.trvl-media.com/place/178239/8970bbdd-3367-4cf8-9ec8-fe9a12776371.jpg?impolicy=fcrop&w=450&h=280&q=medium'
    }
  ];
}
