/**
 * Initialize the profile schema option with its default value
 */
Options.set('profileSchema', {
    name: {
        type: String,
        label: orion.helpers.getTranslation('accounts.schema.profile.name') // leave it like this to keep the translation
    },
    rut: {
        type: String,
        label: 'Rut'
    },
    phone: {
        type: String,
        label: 'Teléfono'
    }
});

// Adding rut field
AccountsTemplates.addField({
    _id: 'rut',
    type: 'text',
    displayName: 'Rut',
    placeholder: 'Rut',
    required: true
});

AccountsTemplates.addField({
    _id: 'phone',
    type: 'text',
    displayName: 'Teléfono',
    placeholder: 'Teléfono',
    required: true
});