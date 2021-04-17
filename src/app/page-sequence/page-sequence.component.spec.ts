import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSequenceComponent } from './page-sequence.component';

describe('PageSequenceComponent', () => {
  let component: PageSequenceComponent;
  let fixture: ComponentFixture<PageSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSequenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
