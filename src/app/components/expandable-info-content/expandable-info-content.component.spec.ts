import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableInfoContentComponent } from './expandable-info-content.component';

describe('ExpandableInfoContentComponent', () => {
  let component: ExpandableInfoContentComponent;
  let fixture: ComponentFixture<ExpandableInfoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableInfoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableInfoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
