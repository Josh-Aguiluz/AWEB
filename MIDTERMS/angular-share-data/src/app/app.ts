import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; 
import { EmployeeService } from './services/employee';
import { ProductsService } from './services/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit { 
  

  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }[] = [];

  public products: any; 

  constructor(
    private employeeService: EmployeeService,
    private productsService: ProductsService
  ) {}


  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.products = this.productsService.getProducts();
  }
}