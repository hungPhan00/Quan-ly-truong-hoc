import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaichinhComponent } from './taichinh.component';

describe('TaichinhComponent', () => {
  let component: TaichinhComponent;
  let fixture: ComponentFixture<TaichinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaichinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaichinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
