import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostJobComponent } from './my-post-job.component';

describe('MyPostJobComponent', () => {
  let component: MyPostJobComponent;
  let fixture: ComponentFixture<MyPostJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPostJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPostJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
