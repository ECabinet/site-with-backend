/**
 * Podcast.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 
  attributes: {
    title: 'string',
    url: 'string',
    description:'string',
    date: 'date',
    timeLength:'string', 
    pic:'string',
    reviews: {
      collection: 'Review',
      via: 'podcast'
    },
    views: {
      collection: 'ViewedPodcast',
      via: 'podcast'
    }
  }
};
