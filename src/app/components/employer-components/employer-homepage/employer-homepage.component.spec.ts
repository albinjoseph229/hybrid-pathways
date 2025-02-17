import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerHomepageComponent } from './employer-homepage.component';

describe('EmployerHomepageComponent', () => {
  let component: EmployerHomepageComponent;
  let fixture: ComponentFixture<EmployerHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
