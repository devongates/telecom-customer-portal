import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserplanComponent } from './edit-userplan.component';

describe('EditUserplanComponent', () => {
  let component: EditUserplanComponent;
  let fixture: ComponentFixture<EditUserplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
