import {Restaurant} from '../../../backend-contract/Model/Restaurant';

export interface IData {
  initializedSuccessfully: boolean;
  getRestaurants(): Array<Restaurant>;
  getRestaurant(id: string): Restaurant;
  addRestaurant(restaurant: Restaurant): Restaurant;
  updateRestaurant(restaurant: Restaurant): Restaurant;
  deleteRestaurant(restaurant: Restaurant): Restaurant;
}
