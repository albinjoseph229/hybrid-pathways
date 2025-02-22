import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewCaseStudiesComponent } from './admin-view-case-studies.component';

describe('AdminViewCaseStudiesComponent', () => {
  let component: AdminViewCaseStudiesComponent;
  let fixture: ComponentFixture<AdminViewCaseStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewCaseStudiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
