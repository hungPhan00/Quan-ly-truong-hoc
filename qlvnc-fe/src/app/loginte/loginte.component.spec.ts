import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginteComponent } from './loginte.component';

describe('LoginteComponent', () => {
  let component: LoginteComponent;
  let fixture: ComponentFixture<LoginteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
