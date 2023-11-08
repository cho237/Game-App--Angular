import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingGamesComponent } from './trending-games.component';

describe('TrendingGamesComponent', () => {
  let component: TrendingGamesComponent;
  let fixture: ComponentFixture<TrendingGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingGamesComponent]
    });
    fixture = TestBed.createComponent(TrendingGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
