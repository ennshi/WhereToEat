import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {HomePageComponent} from './page/home-page/home-page.component';
import {RestaurantsPageComponent} from './page/restaurants-page/restaurants-page.component';
import {RestaurantInfoPageComponent} from './page/restaurant-info-page/restaurant-info-page.component';
import {UserPageComponent} from './user-page/user-page.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'restaurants/:location', component: RestaurantsPageComponent},
      {path: 'restaurant_info/:id', component: RestaurantInfoPageComponent},
      {path: 'user/:id', component: UserPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
