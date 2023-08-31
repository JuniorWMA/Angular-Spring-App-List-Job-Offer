import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJobComponent } from './form-job.component';

describe('FormJobComponent', () => {
  let component: FormJobComponent;
  let fixture: ComponentFixture<FormJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormJobComponent]
    });
    fixture = TestBed.createComponent(FormJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
