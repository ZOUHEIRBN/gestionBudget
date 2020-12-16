import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarketFormComponent } from './add-market-form.component';

describe('AddMarketFormComponent', () => {
  let component: AddMarketFormComponent;
  let fixture: ComponentFixture<AddMarketFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarketFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
