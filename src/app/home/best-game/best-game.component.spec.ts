import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestGameComponent } from './best-game.component';

describe('BestGameComponent', () => {
  let component: BestGameComponent;
  let fixture: ComponentFixture<BestGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestGameComponent]
    });
    fixture = TestBed.createComponent(BestGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
