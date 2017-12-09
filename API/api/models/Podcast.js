/**
 * Podcast.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 
 attributes: {
 	  podcastId: 'integer'
      pTitle: 'sting',
      url: 'string',
      pDescription:'string',
      pDate: 'string'
  }
};
sails.config.models.migrate='drop';
