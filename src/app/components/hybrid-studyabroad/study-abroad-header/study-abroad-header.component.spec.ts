import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyAbroadHeaderComponent } from './study-abroad-header.component';

describe('StudyAbroadHeaderComponent', () => {
  let component: StudyAbroadHeaderComponent;
  let fixture: ComponentFixture<StudyAbroadHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyAbroadHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyAbroadHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
