import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from '../shared/restaurants.service';
import {Restaurant} from '../shared/interfaces';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.scss']
})
export class RestaurantsPageComponent implements OnInit {
  restaurants$: Observable<Restaurant[]>;
  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
      this.restaurants$ = this.restaurantsService.getAll();
  }

}
