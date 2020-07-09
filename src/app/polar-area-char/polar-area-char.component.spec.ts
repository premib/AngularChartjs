import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarAreaCharComponent } from './polar-area-char.component';

describe('PolarAreaCharComponent', () => {
  let component: PolarAreaCharComponent;
  let fixture: ComponentFixture<PolarAreaCharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolarAreaCharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarAreaCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
