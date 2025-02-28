import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerJobfinderComponent } from './jobseeker-jobfinder.component';

describe('JobseekerJobfinderComponent', () => {
  let component: JobseekerJobfinderComponent;
  let fixture: ComponentFixture<JobseekerJobfinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobseekerJobfinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerJobfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
