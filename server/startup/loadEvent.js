Meteor.startup(function () {
    if (Evenements.find().count() === 0) {
        var evenements = [
            {

                'firstname': 'firstname1',
                'lastname': 'lastname1',
                'ville': 'Paris',
            },
            {
                'firstname': 'firstname2',
                'lastname': 'lastname2',
                'ville': 'Londre'
            }
        ];

        for (var i = 0; i < evenements.length; i++) {
            Evenements.insert(evenements[i]);
            Villes.insert({'name': evenements[i].ville});
        }
    }
});
