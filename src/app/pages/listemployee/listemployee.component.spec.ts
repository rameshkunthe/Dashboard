import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemployeeComponent } from './listemployee.component';

describe('ListemployeeComponent', () => {
  let component: ListemployeeComponent;
  let fixture: ComponentFixture<ListemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
