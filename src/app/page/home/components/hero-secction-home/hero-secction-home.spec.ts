import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSecctionHome } from './hero-secction-home';

describe('HeroSecctionHome', () => {
  let component: HeroSecctionHome;
  let fixture: ComponentFixture<HeroSecctionHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSecctionHome],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSecctionHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
