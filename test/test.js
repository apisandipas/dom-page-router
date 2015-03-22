var chai      = require('chai'),
    sinon     = require("sinon"),
    sinonChai = require("sinon-chai");
    chai.should();
    chai.use(sinonChai);


var PageRouter = require('../lib/pageRouter');

describe('PageRouter', function(){

    var instance, routes;

    beforeEach(function(){

        routes = {
            common: function(){
                //console.log('foo');
            },
            'page-index': function(){
                //console.log('bar');
            }
        };

        instance = new PageRouter( routes );

    });

    xit('should fire `common` tasks when init is called', function(){

        instance.init('page-index');

        var spy = sinon.spy(routes, "common");

        spy.should.have.been.called();

    });
    
});