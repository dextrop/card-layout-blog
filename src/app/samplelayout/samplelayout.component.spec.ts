import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplelayoutComponent } from './samplelayout.component';

describe('SamplelayoutComponent', () => {
  let component: SamplelayoutComponent;
  let fixture: ComponentFixture<SamplelayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplelayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
