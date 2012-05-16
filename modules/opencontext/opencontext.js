// Module: OpenContext HTML

define(['jquery'], function($) {
    return {
        name: 'Open Context Resource',
        dataType: 'xml',
        type: 'object',
        toDataUri: function(uri) {
            return uri;
        },
        parseData: function(xml) {
            var getText = awld.accessor(xml);
            var imageURI = getText('[id = "all_media"] img', 'src');
            if (DEBUG) { console.log(typeof imageURI) }
            imageURI = typeof imageURI === 'string'? imageURI : imageURI[0];
            if (DEBUG) { console.log(imageURI) }
            return {
                name: "OpenContext " + getText('[id = "item_name"]'),
                description: getText('[id = "item_class"]'),
                imageURI: imageURI,
            };
        },
    };
});
