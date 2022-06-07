import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporterViewRequestsComponent } from './transporter-view-requests.component';

describe('TransporterViewRequestsComponent', () => {
  let component: TransporterViewRequestsComponent;
  let fixture: ComponentFixture<TransporterViewRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransporterViewRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporterViewRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
