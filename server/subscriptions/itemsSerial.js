Meteor.publish("itemsSerial", function (serialNumber) {
    check(serialNumber, String);
    return Items.find({serialNumber: serialNumber});
});