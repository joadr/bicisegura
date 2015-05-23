Template.search.onRendered(function() {
    this.subscribe('itemsSerial', Router.current().params.q);
});

Template.search.helpers({
    item: function(){
        var item = Items.findOne({ serialNumber: Router.current().params.q, stolen: true });
        if(item){
            return item;
        }
        return false;
    },
    image: function(){
        return this.images[0].url;
    },
    tipo: function(){
        if(this.type == "frame"){
            return "Marco";
        } else if(this.type == "fork"){
            return "Horquilla";
        } else {
            return "Unknown";
        }
    }
});
