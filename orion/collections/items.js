/**
 * We declare the collection just like meteor default way
 * but changing Meteor.Collection to orion.collection.
 *
 * We can set options to that new collection, like which fields
 * we will show in the index of the collection in the admin
 */
Items = new orion.collection('items', {
    singularName: 'Item', // The name of one of this items
    pluralName: 'Items', // The name of more than one of this items
    link: {
        title: 'Items'
    },
    tabular: {
        columns: [
            { data: "serialNumber", title: "Número de serie" },
            { data: "type", title: "Tipo" },
            { data: "brand", title: "Marca" },
            { data: "year", title: "Año" },
            { data: "color", title: "Color" },
            orion.attributeColumn('createdBy', 'createdBy', 'Dueño')
        ]
    }
});

/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Items.attachSchema(new SimpleSchema({
    serialNumber: {
        type: String,
        label: "Número de serie",
        unique: true
    },
    type: {
        type: String,
        label: "Tipo",
        optional: true,
        allowedValues: ['frame', 'fork'],
        autoform:{
            options: [
                {label: 'Marco', value:'frame'},
                {label: 'Horquilla', value: 'fork'}
            ]
        }
    },
    brand: {
        type: String,
        label: "Marca",
        optional: true
    },
    model: {
        type: String,
        label: "Modelo",
        optional: true
    },
    year: {
        type: Number,
        label: "Año",
        optional: true
    },
    color: {
        type: String,
        label: "Color",
        optional: true
    },
    images: orion.arrayOfAttribute('file', {
        label: 'Imagen',
        optional: true
    }),
    ticket: orion.attribute('file', {
        label: 'Boleta (opcional)',
        optional: true
    }),
    stolen: {
        type: Boolean,
        label: 'Robada'
    },
    stolenDate: {
        type: Date,
        label: "Fecha del robo",
        optional: true
    },
    stolenCity: {
        type: String,
        label: "Ciudad del robo",
        optional: true
    },
    stolenComuna: {
        type: String,
        label: "Comunda del robo",
        optional: true
    },
    stolenCoords: {
        type: String,
        label: "Lugar de robo",
        optional: true
    },

    createdBy: orion.attribute('createdBy')
}));

Items.initEasySearch('serialNumber');

