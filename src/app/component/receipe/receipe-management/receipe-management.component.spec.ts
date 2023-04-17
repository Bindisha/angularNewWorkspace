import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeManagementComponent } from './receipe-management.component';

describe('ReceipeManagementComponent', () => {
  let component: ReceipeManagementComponent;
  let fixture: ComponentFixture<ReceipeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceipeManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceipeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
