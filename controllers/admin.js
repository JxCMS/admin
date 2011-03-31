/**
 * admin controller
 */

/**
 * Dependencies
 */

var Controller_Main = require('../../../system/controller').Controller_Main;


(function(){

    exports = new Class({

        Extends: Controller_Main,


        before: function(){

        },

        after: function(){

        },

        index_action: function() {
            
        }

    });

    exports.routes = [
        ['loader','GET /admin/(\\w+)/(\\d+)$', ['action','id'], ['admin/controllers/admin','index']]
    ]

})();