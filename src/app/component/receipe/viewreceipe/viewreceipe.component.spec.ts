import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreceipeComponent } from './viewreceipe.component';

describe('ViewreceipeComponent', () => {
  let component: ViewreceipeComponent;
  let fixture: ComponentFixture<ViewreceipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewreceipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewreceipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
