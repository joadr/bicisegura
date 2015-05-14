Template.search.onRendered(function() {
    this.subscribe('itemsSerial', Router.current().params.q);
});

Template.search.helpers({
    frames: function(){
        return Items.find({ serialNumber: Router.current().params.q, type: 'frame', stolen: true }).fetch();
    },
    forks: function(){
        return Items.find({ serialNumber: Router.current().params.q, type: 'fork', stolen: true }).fetch();
    },
    picture: function(){
        return this.images[0].url;
    }
});
