import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RestaurantsPageComponent } from './restaurants-page/restaurants-page.component';
import { RestaurantInfoPageComponent } from './restaurant-info-page/restaurant-info-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { RestaurantComponent } from './shared/components/restaurant/restaurant.component';



@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    RestaurantsPageComponent,
    RestaurantInfoPageComponent,
    UserPageComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
