import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Object } from './object';

describe('Object', () => {
  let component: Object;
  let fixture: ComponentFixture<Object>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Object],
    }).compileComponents();

    fixture = TestBed.createComponent(Object);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
