import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipResultComponent } from './chip-result.component';

describe('ChipResultComponent', () => {
  let component: ChipResultComponent;
  let fixture: ComponentFixture<ChipResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
