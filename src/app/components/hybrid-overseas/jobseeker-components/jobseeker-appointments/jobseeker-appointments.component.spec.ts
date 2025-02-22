import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerAppointmentsComponent } from './jobseeker-appointments.component';

describe('JobseekerAppointmentsComponent', () => {
  let component: JobseekerAppointmentsComponent;
  let fixture: ComponentFixture<JobseekerAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobseekerAppointmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
