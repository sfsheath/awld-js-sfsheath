// Module: Geonames places

define(function() {
    return {
        name: 'Geonames',
        dataType: 'xml';
        type: 'place',
        toDataUri: function(uri) {
            return uri.replace(/[A-Za-z]+.html/,'about.rdf');
        },
        corsEnabled: true,
        // add name to data
        parseData: function(xml) {
           var getText = awld.accessor(xml);
           return {
            latlon: {[],[]};
        }
    };
});