import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSequenceComponent } from './result-sequence.component';

describe('ResultSequenceComponent', () => {
  let component: ResultSequenceComponent;
  let fixture: ComponentFixture<ResultSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultSequenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
