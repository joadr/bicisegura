Template.base.events({
    'click .toggle-search-box' : function(event){
       event.preventDefault();
        $('.rest').hide();
        $('.search-box').show();
        $("#searchSerialNumber").focus();
    },
    'focusout .search-box' : function(){
        $('.search-box').hide();
        $('.rest').show();
    },
    'submit .search-box': function(event){
        event.preventDefault();
        Router.go('search', {q: $("#searchSerialNumber").val()});
    },
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});

Template.base.rendered = function(){
    $('.button-collapse').sideNav();
};