/**
 * Review.js
 *
 * @description ::  login: users login info; title: podcast title; reviews: the review that users marks for the podcast
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	  reviewId :'integer',
  	  userId: 'integer',
      rRating: 'integer',
      rDescription : 'string',
      podcastId: 'integer',
      reviewer:{
      	collection: 'User'
      }
  },

  
};
// sails.config.models.migrate='drop';

// Podcast.CREATE({pTitle: 'James', url: 'https://soundcloud.com/user-744020114/e-cabinetjames-ellsmoor-ep4'}).EXEC(CONSOLE.LOG)