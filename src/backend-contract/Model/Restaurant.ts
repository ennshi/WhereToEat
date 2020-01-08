import mongodb from 'mongodb';

export class Restaurant {

  id: string;
  restaurant_name: string;
  restaurant_description: string;
  location: string;
  images: Array<File>;
  presentationImageIndex: Number;
  number_of_reviews: Number;
  evaluation_tpc: Number;

  constructor(id, restaurant_name, restaurant_description, location, images,
              presentationImageIndex, number_of_reviews, evaluation_tpc) {
    this.id = id;
    this.restaurant_name = restaurant_name;
    this.restaurant_description = restaurant_description;
    this.location = location;
    this.images = images;
    this.presentationImageIndex = presentationImageIndex;
    this.number_of_reviews = number_of_reviews;
    this.evaluation_tpc = evaluation_tpc;
  }
}
