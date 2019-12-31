import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RestaurantsPageComponent } from './restaurants-page/restaurants-page.component';
import { RestaurantInfoPageComponent } from './restaurant-info-page/restaurant-info-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { RestaurantComponent } from './shared/components/restaurant/restaurant.component';
import {ApiService} from "./shared/api.service";


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
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
