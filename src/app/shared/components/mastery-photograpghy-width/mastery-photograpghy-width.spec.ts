import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteryPhotograpghyWidth } from './mastery-photograpghy-width';

describe('MasteryPhotograpghyWidth', () => {
  let component: MasteryPhotograpghyWidth;
  let fixture: ComponentFixture<MasteryPhotograpghyWidth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasteryPhotograpghyWidth],
    }).compileComponents();

    fixture = TestBed.createComponent(MasteryPhotograpghyWidth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
