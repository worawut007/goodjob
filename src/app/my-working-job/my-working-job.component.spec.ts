import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkingJobComponent } from './my-working-job.component';

describe('MyWorkingJobComponent', () => {
  let component: MyWorkingJobComponent;
  let fixture: ComponentFixture<MyWorkingJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWorkingJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkingJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
