import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReceipeComponent } from './edit-receipe.component';

describe('EditReceipeComponent', () => {
  let component: EditReceipeComponent;
  let fixture: ComponentFixture<EditReceipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReceipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditReceipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
