import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFundFormComponent } from './add-fund-form.component';

describe('AddFundFormComponent', () => {
  let component: AddFundFormComponent;
  let fixture: ComponentFixture<AddFundFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFundFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFundFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
