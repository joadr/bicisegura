Router.map(function(){
    this.route('/', {
       name: 'home',
       layoutTemplate: 'base'
    });

    this.route('/search/:q', {
        name: 'search',
        layoutTemplate: 'base',
        waiton: function(){
            return []
        }
    });
});