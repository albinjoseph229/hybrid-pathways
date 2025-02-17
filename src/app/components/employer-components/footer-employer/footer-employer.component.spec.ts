import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEmployerComponent } from './footer-employer.component';

describe('FooterEmployerComponent', () => {
  let component: FooterEmployerComponent;
  let fixture: ComponentFixture<FooterEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterEmployerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
