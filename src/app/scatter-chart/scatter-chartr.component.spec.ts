import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterChartrComponent } from './scatter-chartr.component';

describe('ScatterChartrComponent', () => {
  let component: ScatterChartrComponent;
  let fixture: ComponentFixture<ScatterChartrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScatterChartrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterChartrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
