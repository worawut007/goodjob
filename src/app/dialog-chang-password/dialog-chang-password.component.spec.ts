import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChangPasswordComponent } from './dialog-chang-password.component';

describe('DialogChangPasswordComponent', () => {
  let component: DialogChangPasswordComponent;
  let fixture: ComponentFixture<DialogChangPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogChangPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogChangPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
