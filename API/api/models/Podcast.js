/**
 * Podcast.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 
 attributes: {
      title: 'string',
      soundCloud: 'string',
      description:'string',
      dateOfPodcast: 'string',
      reviews:'string'
  }
};
sails.config.models.migrate='drop';
