import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerUpdatesComponent } from './employer-updates.component';

describe('EmployerUpdatesComponent', () => {
  let component: EmployerUpdatesComponent;
  let fixture: ComponentFixture<EmployerUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerUpdatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
