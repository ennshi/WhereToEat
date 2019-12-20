import mongodb from 'mongodb';

export class Restaurant {

  id: number;
  name: string;
  description: string;
  location: string;

  constructor(id, name, description, location) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.location = location;
  }
}
