/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 
 attributes: {
      userId: 'integer',
      email: 'string', //todo 
      phone:'string',
      fName:'string',
      lName:'string'
  }
};
// sails.config.models.migrate='drop';

