import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAbout } from './footer-about';

describe('FooterAbout', () => {
  let component: FooterAbout;
  let fixture: ComponentFixture<FooterAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
