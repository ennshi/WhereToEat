import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {RestaurantsPageComponent} from './restaurants-page/restaurants-page.component';
import {RestaurantInfoPageComponent} from './restaurant-info-page/restaurant-info-page.component';
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
