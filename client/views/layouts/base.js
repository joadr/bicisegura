Template.base.events({
    'click .toggle-search-box' : function(event){
       event.preventDefault();
        $('.rest').hide();
       $('.search-box').show();
    },
    'focusout .search-box' : function(){
        $('.search-box').hide();
        $('.rest').show();
    },
    'submit .search-box': function(event){
        event.preventDefault();
        Router.go('search', {q: $("#searchSerialNumber").val()});
    }
});

Template.base.rendered = function(){
    $('.button-collapse').sideNav();
};