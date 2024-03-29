import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFrmComponent } from './add-frm.component';

describe('AddFrmComponent', () => {
  let component: AddFrmComponent;
  let fixture: ComponentFixture<AddFrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFrmComponent]
    });
    fixture = TestBed.createComponent(AddFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
