import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionBlog } from './hero-section-blog';

describe('HeroSectionBlog', () => {
  let component: HeroSectionBlog;
  let fixture: ComponentFixture<HeroSectionBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionBlog],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSectionBlog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
