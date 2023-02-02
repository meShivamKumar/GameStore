import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseQueryComponent } from './raise-query.component';

describe('RaiseQueryComponent', () => {
  let component: RaiseQueryComponent;
  let fixture: ComponentFixture<RaiseQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaiseQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
