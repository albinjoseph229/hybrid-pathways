import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostJobOpeningsComponent } from './post-job-openings.component';

describe('PostJobOpeningsComponent', () => {
  let component: PostJobOpeningsComponent;
  let fixture: ComponentFixture<PostJobOpeningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostJobOpeningsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostJobOpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
