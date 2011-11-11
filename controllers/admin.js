/**
 * admin controller
 */

/**
 * Dependencies
 */

var Controller_Main = require('../../../system/controller').Controller_Main,
    Promise = require('promise').Promise;


(function(){

    var Controller = exports.Controller = new (new Class({

        Extends: Controller_Main,
        
        after: function(request, response){
            response.view.set('layout','admin');
            return this.parent(request,response);
        },

        index_action: function() {
           var p = new Promise();
           
           p.resolve('');
           return p;
        }

    }))();

    exports.routes = [
        //name, 'method regex', regex match keys, controller object, key defaults
        ['admin','GET \\/admin(\\/(\\w+))?(\\/(\\d+))?$', ['action','id'], Controller,{action: 'index', id: -1}]
    ]

})();