import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibFooterComponent } from './lib-footer.component';

describe('LibFooterComponent', () => {
  let component: LibFooterComponent;
  let fixture: ComponentFixture<LibFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
