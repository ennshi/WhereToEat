const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Restaurant = new Schema({
  restaurant_name: {
    type: String
  },
  restaurant_description: {
    type: String
  },
  location: {
    type: String
  },
  images: {
    type: Array
  },
  presentationImageIndex: {
    type: Number
  },
  number_of_reviews: {
    type: Number
  },
  evaluation_tpc: {
    type: Number
  }
}, {
  collection: 'restaurants'
})

module.exports = mongoose.model('Restaurant', Restaurant)
