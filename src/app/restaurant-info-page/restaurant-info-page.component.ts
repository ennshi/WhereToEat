import { Component, OnInit} from '@angular/core';
import {Restaurant} from '../shared/interfaces';
import {RestaurantsService} from '../shared/restaurants.service';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-restaurant-info-page',
  templateUrl: './restaurant-info-page.component.html',
  styleUrls: ['./restaurant-info-page.component.scss']
})

export class RestaurantInfoPageComponent implements OnInit {
  restaurant: Restaurant;
  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.restaurantsService.getById(params['id']);
      })
    ).subscribe((restaurant: Restaurant) => {
      this.restaurant = restaurant;
      console.log(this.restaurant);
    });
  }

}
