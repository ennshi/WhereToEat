import {Restaurant} from '../../../backend-contract/Model/Restaurant';
import {IData} from './IData';

// TODO: Testing
class StubData implements IData {

  constructor() {
    this.restaurants = new Array<Restaurant>();
    this.restaurants.push(new Restaurant(0, 'Pizzini Italiano', 'Ciao bambino! You will love our traditional kitchen!', 'l1', null, 0, 5, 100));
    this.restaurants.push(new Restaurant(1, 'Nacho Camacho', 'Red burning chili restaurant of ashes. Come to us if you dare!', 'l2', null, 0, 31, 91));
    this.restaurants.push(new Restaurant(2, 'Balalaika Medvedevna', 'Velkom komrad!', 'l3', null, 0, 2, 86));
    this.restaurants.push(new Restaurant(3, 'Air Trade', 'Only the best and newest healthy and low calory food', 'l4', null, 0, 7, 46));
    this.restaurants.push(new Restaurant(4, 'Random', 'Like surprises? Tell us about your tastes by answering some questions and we will make a delitious plate just for you!', 'l5', null, 0, 1, 80));
    this.restaurants.push(new Restaurant(5, 'Demon Exorcism', 'Regna terrae, cantata Deo, psallite Cernunnos, Regna terrae, cantata Dea psallite Aradia. caeli Deus, Deus terrae, Humiliter majestati gloriae tuae supplicamus Ut ab omni infernalium spirituum potestate, Laqueo, and deceptione nequitia, Omnis fallaciae, libera nos, dominates. Exorcizamus you omnis immundus spiritus Omnis satanica potestas, omnis incursio, Infernalis adversarii, omnis legio, Omnis and congregatio secta diabolica. Ab insidiis diaboli, libera nos, dominates, Ut coven tuam secura tibi libertate servire facias, Te rogamus, audi nos! Ut inimicos sanctae circulae humiliare digneris, Te rogamus, audi nos! Terribilis Deus Sanctuario suo, Cernunnos ipse truderit virtutem plebi Suae, Aradia ipse fortitudinem plebi Suae. Benedictus Deus, Gloria Patri, Benedictus Dea, Matri gloria!', 'l6', null, 0, 666, 66));
    this.restaurants.push(new Restaurant(6, 'Merol Muspi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'l7', null, 0, 611, 98));
    this.initializedSuccessfully = true;
  }
  restaurants: Array<Restaurant>;
  count = 21;

  initializedSuccessfully = false;

  addRestaurant(restaurant: Restaurant): Restaurant {
    restaurant.id = this.count.toString();
    this.restaurants.push(restaurant);
    this.count++;
    return restaurant;
  }

  deleteRestaurant(restaurant: Restaurant): Restaurant {
    const index = this.restaurants.indexOf(restaurant, 0);
    if (index > -1) {
      this.restaurants.splice(index, 1);
    }
    return restaurant;
  }

  getRestaurant(id: string): Restaurant {
    return this.restaurants.find(x => x.id === id);
  }

  // TODO: not secure, all the data may be stolen by this function
  getRestaurants(): Array<Restaurant> {
    return this.restaurants;
  }

  updateRestaurant(restaurant: Restaurant): Restaurant {
    const index = this.restaurants.indexOf(restaurant, 0);
    if (index > -1) {
      this.restaurants[index] = restaurant;
    }
    return restaurant;
  }
}
