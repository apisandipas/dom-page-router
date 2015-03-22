/**
 * PageRouter - routes Javascript actions based on body ID.
 *
 * Inspired by: http://www.paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
 *
 */

(function(root, factory) {

    if (typeof define === 'function' && define.amd) {

        define([], factory);

    } else if (typeof exports === 'object') {

        module.exports = factory();

    } else {

        root.PageRouter = factory();

    }

}(this, function() {
    'use strict';

    /**
     * PageRouter
     * @param routes
     * @returns {{init: Function}}
     * @constructor
     */
    function PageRouter(routes) {


        /**
         * Fires the matched route action
         * @param func
         * @param args
         * @private
         */
        var _fire = function (func, args) {

            if (func !== '' && typeof routes[func] == 'function') {
                routes[func](args);
            }
        };

        /**
         *  Fires events on DOMContentReady
         *  1. First fires a 'common' function, if present in the router object,
         *  2. then fires a function based on the body ID
         */
        var init = function ( bodyId ) {

            var bodyId = bodyId || document.body.id;

            // hit up common scripts first.
            _fire('common');

            // then fire page-specific scripts.
            _fire(bodyId);

        };


        /* expose public API */
        return {
            init: init
        };

    }

    return PageRouter;

}));

