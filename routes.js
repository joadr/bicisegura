Router.map(function(){
    this.route('/', {
       name: 'home',
       layoutTemplate: 'base'
    });

    this.route('/search/:query', {
        name: 'search',
        layoutTemplate: 'base'
    });
});