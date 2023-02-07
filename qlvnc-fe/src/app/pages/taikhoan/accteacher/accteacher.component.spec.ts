import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccteacherComponent } from './accteacher.component';

describe('AccteacherComponent', () => {
  let component: AccteacherComponent;
  let fixture: ComponentFixture<AccteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccteacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
