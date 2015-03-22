# PageRouter

Read this: http://www.paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/.

Basically like that, but the route object is passed into a constructor.

    var router = new PageRouter({

        common: function(){
            log('common fired!');
            changeActiveLink();
        },
        'page-home': function(){
            log('page home!');
        },
        'page-faqs': function(){
            log('page-faqs!');
        }

    });


    // kick it all off here
    $(router.init);