import {Restaurant} from '../Model/Restaurant';

export interface IData {
  initializedSuccessfully: boolean;
  getRestaurants(): Array<Restaurant>;
  getRestaurant(id: number): Restaurant;
  addRestaurant(restaurant: Restaurant): Restaurant;
  updateRestaurant(restaurant: Restaurant): Restaurant;
  deleteRestaurant(restaurant: Restaurant): Restaurant;
}
