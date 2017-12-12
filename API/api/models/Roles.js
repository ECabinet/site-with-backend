/**
 * Roles.js
 *
 * @description ::  login: users login info; title: podcast title; reviews: the review that users marks for the podcast
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user: {
      model: 'User'
    },
    role: {
      type: 'integer',
    }
  },
};

// Podcast.CREATE({pTitle: 'James', url: 'https://soundcloud.com/user-744020114/e-cabinetjames-ellsmoor-ep4'}).EXEC(CONSOLE.LOG)