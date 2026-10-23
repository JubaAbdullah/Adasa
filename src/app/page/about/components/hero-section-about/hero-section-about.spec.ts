import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionAbout } from './hero-section-about';

describe('HeroSectionAbout', () => {
  let component: HeroSectionAbout;
  let fixture: ComponentFixture<HeroSectionAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSectionAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
