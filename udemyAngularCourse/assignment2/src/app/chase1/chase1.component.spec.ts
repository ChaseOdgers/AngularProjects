import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chase1Component } from './chase1.component';

describe('Chase1Component', () => {
  let component: Chase1Component;
  let fixture: ComponentFixture<Chase1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chase1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
