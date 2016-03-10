Meteor.publish('evenements', function () {
    return Evenements.find({});
});

Meteor.publish('villes', function () {
    return Villes.find({});
});
Meteor.methods({
    insertEvent: function (event) {
        Evenements.insert({
            'firstname': event.firstname,
            'lastname': event.lastname,
            'date': event.date,
            'ville': event.ville,
            'idImage': event.idImage,
            /*'base64': event.base64,*/
            'state': event.state
        }, function (error, result) {
        });
    },
    updateEvent: function (event) {
        Evenements.update({_id: event._id}, {
            $set: {
                _id: event._id,
                'firstname': event.firstname,
                'lastname': event.lastname,
                'date': event.date,
                'ville': event.ville,
                'idImage': event.idImage,
                /*'base64': event.base64,*/
                'state': event.state
            }
        });

    },
    removeEvent: function (id) {
        Evenements.remove(id);
    },
    insertVille: function (ville) {
        Villes.insert({'name': ville}, function (error, result) {
        });
    }
})

