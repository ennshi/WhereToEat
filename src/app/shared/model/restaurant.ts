export interface Restaurant {
  id?: number;
  name: string;
  location: string;
  rate?: number;
  description?: string;
  num_reviews?: number;
  photo?: Array<string>;
}
