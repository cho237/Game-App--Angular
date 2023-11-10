import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeadComponent } from './home/head/head.component';
import { TrendingGamesComponent } from './home/trending-games/trending-games.component';
import { BestGameComponent } from './home/best-game/best-game.component';
import { HomeComponent } from './home/home.component';
import { GameDevelopmentComponent } from './home/game-development/game-development.component';
import { RecentProjectsComponent } from './home/recent-projects/recent-projects.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeadComponent,
    TrendingGamesComponent,
    BestGameComponent,
    HomeComponent,
    GameDevelopmentComponent,
    RecentProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
