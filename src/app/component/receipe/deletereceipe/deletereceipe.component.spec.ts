import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletereceipeComponent } from './deletereceipe.component';

describe('DeletereceipeComponent', () => {
  let component: DeletereceipeComponent;
  let fixture: ComponentFixture<DeletereceipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletereceipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletereceipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
