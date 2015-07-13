Router.map(function(){
    this.route('/', {
       name: 'home',
       layoutTemplate: 'base'
    });

    this.route('search', {
        path: '/search/:q',
        layoutTemplate: 'base'
    });

    /*this.route('register', {
        path: '/register'
    });*/

    AccountsTemplates.configureRoute('signUp', {
        name: 'register',
        path: '/register',
        layoutTemplate: 'orionMaterializeOutAdminLayout',
        template: 'register',
        redirect: '/'
    });

    this.route('transfer', {
        path: '/admin/transfer',
        layoutTemplate: 'orionMaterializeLayout',
    })
});