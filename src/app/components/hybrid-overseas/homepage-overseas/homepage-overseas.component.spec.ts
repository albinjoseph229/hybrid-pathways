import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageOverseasComponent } from './homepage-overseas.component';

describe('HomepageOverseasComponent', () => {
  let component: HomepageOverseasComponent;
  let fixture: ComponentFixture<HomepageOverseasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageOverseasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageOverseasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
