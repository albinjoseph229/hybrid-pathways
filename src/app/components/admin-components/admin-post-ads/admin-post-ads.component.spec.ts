import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostAdsComponent } from './admin-post-ads.component';

describe('AdminPostAdsComponent', () => {
  let component: AdminPostAdsComponent;
  let fixture: ComponentFixture<AdminPostAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPostAdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
