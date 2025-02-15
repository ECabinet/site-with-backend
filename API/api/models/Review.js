/**
 * Review.js
 *
 * @description ::  login: users login info; title: podcast title; reviews: the review that users marks for the podcast
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    rating: 'integer',
    description: 'string',
    user: {
      model: 'User'
    },
    podcast: {
      model: 'Podcast'
    }
  },
};