import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbookTemplateComponent } from './addbookTemplate.component';

describe('AddbookComponent', () => {
  let component: AddbookTemplateComponent;
  let fixture: ComponentFixture<AddbookTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbookTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbookTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
