/**
 * The base of the admin module. It provides the basic services for the admin
 * area of any domain/subdomain in the system
 */

/**
 * Dependencies
 */
var routes = require('./controllers/admin').routes;

exports.init = function(router,domain,opt) {
    //setup routing
    router.add(routes);
    return true;
};

