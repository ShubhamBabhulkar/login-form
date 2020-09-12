import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDashboarComponent } from './news-dashboar.component';

describe('NewsDashboarComponent', () => {
  let component: NewsDashboarComponent;
  let fixture: ComponentFixture<NewsDashboarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDashboarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDashboarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
