const itemRoutes = require('./item');
module.exports = function(app, db) {
  itemRoutes(app, db);
};
