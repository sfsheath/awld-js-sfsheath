// Module: Encyclopedia of Life API

define(['jquery'], function($) {
    return {
        name: 'EOL Entries',
        type: 'description',
        // http://eol.org/api/pages/1.0/1045608.json?details=1
        toDataUri: function(uri) {
            var eolId = uri.match(/([0-9]+)/);
            return 'http://eol.org/api/pages/1.0/' + eolId[0] + '.json?details=1';
        },
        parseData: function(data) {
            data.name = data.json.scientificName;
            if (data.json.dataObjects[0]) {data.description = data.json.dataObjects[0].description};
            return data;
        }
    };
});
