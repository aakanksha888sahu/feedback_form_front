import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFome2Component } from './feedback-fome2.component';

describe('FeedbackFome2Component', () => {
  let component: FeedbackFome2Component;
  let fixture: ComponentFixture<FeedbackFome2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackFome2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackFome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
