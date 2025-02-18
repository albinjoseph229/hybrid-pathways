import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverseasFooterComponent } from './overseas-footer.component';

describe('OverseasFooterComponent', () => {
  let component: OverseasFooterComponent;
  let fixture: ComponentFixture<OverseasFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverseasFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverseasFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
