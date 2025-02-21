import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewJobseekersComponent } from './admin-view-jobseekers.component';

describe('AdminViewJobseekersComponent', () => {
  let component: AdminViewJobseekersComponent;
  let fixture: ComponentFixture<AdminViewJobseekersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewJobseekersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewJobseekersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
