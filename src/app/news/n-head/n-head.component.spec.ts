import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NHeadComponent } from './n-head.component';

describe('NHeadComponent', () => {
  let component: NHeadComponent;
  let fixture: ComponentFixture<NHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NHeadComponent]
    });
    fixture = TestBed.createComponent(NHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
