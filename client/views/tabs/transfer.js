Template.transfer.helpers({
    bikes: function(){
        return Items.find().fetch();
    }
});

Template.transfer.onRendered(function() {
    this.subscribe('itemsTransfer');
});