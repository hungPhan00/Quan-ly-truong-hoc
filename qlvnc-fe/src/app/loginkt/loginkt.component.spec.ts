import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginktComponent } from './loginkt.component';

describe('LoginktComponent', () => {
  let component: LoginktComponent;
  let fixture: ComponentFixture<LoginktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
