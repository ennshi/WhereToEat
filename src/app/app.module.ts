import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { RestaurantsPageComponent } from './page/restaurants-page/restaurants-page.component';
import { RestaurantInfoPageComponent } from './page/restaurant-info-page/restaurant-info-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { RestaurantComponent } from './template/restaurant/restaurant.component';
import {ApiService} from "../backend-contract/api.service";



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
    HttpClientModule,
    SharedModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
