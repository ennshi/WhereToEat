import {Restaurant} from '../../../backend-contract/Model/Restaurant';
import {IData} from './IData';
import mongoose, { Schema } from 'mongoose';

/// TODO This class has to adapt the next video's mongodb-centric model to current independent concept
/// https://www.youtube.com/watch?v=IjX6-XV0LiM (9:10)
// TODO: Testing
class MongoData implements IData {
  uri = 'mongodb://127.0.0.1:27017/local';
  initializedSuccessfully = false;

  constructor() {
    mongoose.connect(this.uri, this.logResult());
  }

  addRestaurant(restaurant: Restaurant): Restaurant {
    return undefined;
  }

  deleteRestaurant(restaurant: Restaurant): Restaurant {
    return undefined;
  }

  getRestaurant(id: string): Restaurant {
    return undefined;
  }

  getRestaurants(): Array<Restaurant> {
    return undefined;
  }

  updateRestaurant(restaurant: Restaurant): Restaurant {
    return undefined;
  }

  private logResult() {
    return (err: any) => {
      if (err) {
        console.log(err.message);
      } else {
        this.initializedSuccessfully = true;
        console.log('Successfully Connected!');
      }
    };
  }
}
