Router.map(function(){
    this.route('/', {
       name: 'home',
       layoutTemplate: 'base'
    });

    this.route('search', {
        path: '/search/:q',
        layoutTemplate: 'base',
    });
});