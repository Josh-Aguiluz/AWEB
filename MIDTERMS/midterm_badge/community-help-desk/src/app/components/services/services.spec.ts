import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesComponent } from './services'; // Import correct class name
import { provideHttpClient } from '@angular/common/http'; // Needed for DataService
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
