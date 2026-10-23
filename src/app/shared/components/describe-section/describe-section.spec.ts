import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescribeSection } from './describe-section';

describe('DescribeSection', () => {
  let component: DescribeSection;
  let fixture: ComponentFixture<DescribeSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescribeSection],
    }).compileComponents();

    fixture = TestBed.createComponent(DescribeSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
