import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostCaseStudiesComponent } from './admin-post-case-studies.component';

describe('AdminPostCaseStudiesComponent', () => {
  let component: AdminPostCaseStudiesComponent;
  let fixture: ComponentFixture<AdminPostCaseStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPostCaseStudiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
