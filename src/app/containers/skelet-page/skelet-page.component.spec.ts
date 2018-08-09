import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletPageComponent } from './skelet-page.component';

describe('SkeletPageComponent', () => {
  let component: SkeletPageComponent;
  let fixture: ComponentFixture<SkeletPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
