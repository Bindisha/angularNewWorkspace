import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeHeaderComponent } from './receipe-header.component';

describe('ReceipeHeaderComponent', () => {
  let component: ReceipeHeaderComponent;
  let fixture: ComponentFixture<ReceipeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceipeHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceipeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
