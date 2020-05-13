import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTvshowComponent } from './current-tvshow.component';

describe('CurrentTvshowComponent', () => {
  let component: CurrentTvshowComponent;
  let fixture: ComponentFixture<CurrentTvshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTvshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTvshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
