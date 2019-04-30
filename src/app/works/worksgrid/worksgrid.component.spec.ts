import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksgridComponent } from './worksgrid.component';

describe('WorksgridComponent', () => {
  let component: WorksgridComponent;
  let fixture: ComponentFixture<WorksgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
