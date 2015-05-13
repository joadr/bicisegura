Router.map(function(){
    this.route('/', {
       name: 'home',
       layoutTemplate: 'base'
    });

    this.route('/search/:q', {
        name: 'home',
        layoutTemplate: 'base',
        waiton: function(){
            return []
        }
    });
});