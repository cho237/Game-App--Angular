import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeadComponent } from './head/head.component';
import { TrendingGamesComponent } from './trending-games/trending-games.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeadComponent,
    TrendingGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
