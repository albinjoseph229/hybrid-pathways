import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerHomepageComponent } from './jobseeker-homepage.component';

describe('JobseekerHomepageComponent', () => {
  let component: JobseekerHomepageComponent;
  let fixture: ComponentFixture<JobseekerHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobseekerHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
