import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksgridtextComponent } from './worksgridtext.component';

describe('WorksgridtextComponent', () => {
  let component: WorksgridtextComponent;
  let fixture: ComponentFixture<WorksgridtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksgridtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksgridtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
