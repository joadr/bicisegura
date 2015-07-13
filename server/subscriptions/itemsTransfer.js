Meteor.publish("itemsTransfer", function () {
    return Items.find({stolen: false});
});