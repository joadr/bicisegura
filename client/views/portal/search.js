Template.search.onRendered(function() {
    this.subscribe('itemsSerial', Router.current().params.query);
});

Template.search.helpers({
    frames: function(){
        return Items.find({serialNumber: Router.current().params.query, type: 'frame'}).fetch();
    },
    forks: function(){
        return Items.find({serialNumber: Router.current().params.query, type: 'fork'}).fetch();
    }
});
