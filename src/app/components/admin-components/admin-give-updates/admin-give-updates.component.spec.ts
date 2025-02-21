import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGiveUpdatesComponent } from './admin-give-updates.component';

describe('AdminGiveUpdatesComponent', () => {
  let component: AdminGiveUpdatesComponent;
  let fixture: ComponentFixture<AdminGiveUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGiveUpdatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGiveUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
