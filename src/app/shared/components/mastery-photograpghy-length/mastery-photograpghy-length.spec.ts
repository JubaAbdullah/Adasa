import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteryPhotograpghyLength } from './mastery-photograpghy-length';

describe('MasteryPhotograpghyLength', () => {
  let component: MasteryPhotograpghyLength;
  let fixture: ComponentFixture<MasteryPhotograpghyLength>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasteryPhotograpghyLength],
    }).compileComponents();

    fixture = TestBed.createComponent(MasteryPhotograpghyLength);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
