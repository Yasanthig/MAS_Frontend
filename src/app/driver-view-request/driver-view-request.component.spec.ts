import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverViewRequestComponent } from './driver-view-request.component';

describe('DriverViewRequestComponent', () => {
  let component: DriverViewRequestComponent;
  let fixture: ComponentFixture<DriverViewRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverViewRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverViewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
