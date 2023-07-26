import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MettingComponent } from './metting.component';

describe('MettingComponent', () => {
  let component: MettingComponent;
  let fixture: ComponentFixture<MettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MettingComponent]
    });
    fixture = TestBed.createComponent(MettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
