import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlanFormComponent } from './add-plan-form.component';

describe('AddPlanFormComponent', () => {
  let component: AddPlanFormComponent;
  let fixture: ComponentFixture<AddPlanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
