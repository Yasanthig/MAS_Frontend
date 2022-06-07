import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusrequestComponent } from './statusrequest.component';

describe('StatusrequestComponent', () => {
  let component: StatusrequestComponent;
  let fixture: ComponentFixture<StatusrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
