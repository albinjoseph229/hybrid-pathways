import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderJobseekerComponent } from './header-jobseeker.component';

describe('HeaderJobseekerComponent', () => {
  let component: HeaderJobseekerComponent;
  let fixture: ComponentFixture<HeaderJobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderJobseekerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderJobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
