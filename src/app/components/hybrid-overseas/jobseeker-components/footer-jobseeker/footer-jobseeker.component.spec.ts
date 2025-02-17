import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterJobseekerComponent } from './footer-jobseeker.component';

describe('FooterJobseekerComponent', () => {
  let component: FooterJobseekerComponent;
  let fixture: ComponentFixture<FooterJobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterJobseekerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterJobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
