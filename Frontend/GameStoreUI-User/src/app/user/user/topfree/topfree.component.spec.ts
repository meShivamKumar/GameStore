import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfreeComponent } from './topfree.component';

describe('TopfreeComponent', () => {
  let component: TopfreeComponent;
  let fixture: ComponentFixture<TopfreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopfreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopfreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
