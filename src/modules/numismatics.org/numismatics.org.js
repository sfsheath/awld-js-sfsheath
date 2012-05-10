// Module: OpenContext HTML

define(['jquery'], function($) {
    return {
        name: 'American Numismatic Society Object',
        dataType: 'xml',
        type: 'object',
        toDataUri: function(uri) {
            return uri + '.xml';
        },
        parseData: function(xml) {
            var getText = awld.accessor(xml);
            var imageURI = getText('[USE = "thumbnail"] *','xlink:href')
            return {
                name: "ANS " + getText('title'),
                description: '<img style="max-width:100px" src="'+imageURI[0]+'"/><img style="max-width:100px" src="'+imageURI[1]+'"/>'
            };
        },
    };
});
