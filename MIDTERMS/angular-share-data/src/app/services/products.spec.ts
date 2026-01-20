import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products'; // Import 

describe('ProductsService', () => {
  let service: ProductsService; 

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService); // Inject the correct name
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});