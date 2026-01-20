import { TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee'; 

describe('EmployeeService', () => {
  let service: EmployeeService; 

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService); // Inject the correct class name
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});