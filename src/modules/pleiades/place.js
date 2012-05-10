// Module: Pleiades places

define(function() {
    return {
        name: 'Pleiades Places',
        type: 'place',
        toDataUri: function(uri) {
            return uri + '/json';
        },
        corsEnabled: true,
        // add name to data
        parseData: function(data) {
            data.name = data.title;
            data.latlon = data.reprPoint && data.reprPoint.reverse();
            data.description = data.description + " <br/><a href='http://pelagios.dme.ait.ac.at/api/places/p"+data.id+"'>Further references at Pelagios</a>";
            return data;
        }
    };
});
