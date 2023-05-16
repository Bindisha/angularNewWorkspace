import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbookReactiveComponent } from './addbookReactive.component';

describe('AddbookComponent', () => {
  let component: AddbookReactiveComponent;
  let fixture: ComponentFixture<AddbookReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbookReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbookReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
