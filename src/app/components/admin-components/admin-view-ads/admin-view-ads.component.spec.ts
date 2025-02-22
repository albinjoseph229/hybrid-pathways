import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAdsComponent } from './admin-view-ads.component';

describe('AdminViewAdsComponent', () => {
  let component: AdminViewAdsComponent;
  let fixture: ComponentFixture<AdminViewAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewAdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
