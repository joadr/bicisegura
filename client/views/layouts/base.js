Template.base.events({
    'click .toggle-search-box' : function(event){
       event.preventDefault();
        $('.rest').hide();
       $('.search-box').show();
    },
    'focusout .search-box' : function(event){
        $('.search-box').hide();
        $('.rest').show();
    },
    'submit .search-box': function(event){
        event.preventDefault();
        Router.go('')
    }
});