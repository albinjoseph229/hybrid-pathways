import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverseasHeaderComponent } from './overseas-header.component';

describe('OverseasHeaderComponent', () => {
  let component: OverseasHeaderComponent;
  let fixture: ComponentFixture<OverseasHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverseasHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverseasHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
