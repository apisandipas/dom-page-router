# PageRouter

Read this: http://www.paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/.

Basically like that, but the route object is passed into a constructor.

    var router = new PageRouter({

        common: function(){
            console.log('common fired!');
        },
        'page-home': function(){
            console.log('page home!');
        },
        'page-faqs': function(){
            console.log('page faq!');
        }

    });


    // kick it all off here
    $(router.init);
    
       <body id="page-index"> 
       => console.log('common fired!');
       => console.log('page home!');
      
      <body id="page-faq">   
      => console.log('common fired!');
      => console.log('page faq!');