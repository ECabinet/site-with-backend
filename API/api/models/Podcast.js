/**
 * Podcast.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 
 attributes: {
      pTitle: 'string',
      url: 'string',
      pDescription:'string',
      pDate: 'date',
      pTimeLength:'string', 
      pPic:'string',


      reviews: {
      	collection: 'Review'
      }
  }
};
// sails.config.models.migrate='drop';
