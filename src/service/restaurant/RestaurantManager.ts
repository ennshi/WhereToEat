import {Restaurant} from '../../app/shared/Model/Restaurant';
import {IData} from './data/IData';

// TODO: Testing
export class RestaurantManager {
  private data: IData;

  constructor(data: IData) {
    this.data = data;
  }

  addRestaurant(restaurant: Restaurant): Restaurant {
    return this.data.addRestaurant(restaurant);
  }

  deleteRestaurant(restaurant: Restaurant): Restaurant {
    return this.data.deleteRestaurant(restaurant);
  }

  getRestaurant(id: number): Restaurant {
    return this.data.getRestaurant(id);
  }

  getRestaurants(): Array<Restaurant> {
    return this.data.getRestaurants();
  }

  updateRestaurant(restaurant: Restaurant): Restaurant {
    return this.data.updateRestaurant(restaurant);
  }
}
