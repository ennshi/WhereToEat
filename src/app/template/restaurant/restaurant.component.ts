import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../shared/model/restaurant';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant: Restaurant;
  constructor() { }
  ngOnInit() {
  }

}
