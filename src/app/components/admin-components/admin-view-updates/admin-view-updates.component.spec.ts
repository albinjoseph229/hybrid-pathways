import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewUpdatesComponent } from './admin-view-updates.component';

describe('AdminViewUpdatesComponent', () => {
  let component: AdminViewUpdatesComponent;
  let fixture: ComponentFixture<AdminViewUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewUpdatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
