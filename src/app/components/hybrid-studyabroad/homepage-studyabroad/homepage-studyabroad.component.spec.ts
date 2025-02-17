import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageStudyabroadComponent } from './homepage-studyabroad.component';

describe('HomepageStudyabroadComponent', () => {
  let component: HomepageStudyabroadComponent;
  let fixture: ComponentFixture<HomepageStudyabroadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageStudyabroadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageStudyabroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
