import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  message = 'Data Binding Demonstration';
  imageUrl = 'https://tse1.mm.bing.net/th/id/OIP.XkoEzwsMvgsXyZllfS9L4wHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3';
  w = 100;
  h = 100;
  altText = 'cute cat';
  textColor = 'blue';
  isHighlighted = true;
  yourName = 'Josh';
  count = 0;

  increment() { this.count++; }
  decrement() { this.count--; }

  studentName = "Josh Aguiluz";
  imageUrls = "https://picsum.photos/200";
  isDisabled = true;
  isPassing = true;
  boxColor = "purple";
  
  // 👇 ADD THIS LINE TO FIX THE ERROR 👇
  boxSize = "150px"; 
}