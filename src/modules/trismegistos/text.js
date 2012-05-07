// Module: Trismegistos HTML

define(['jquery'], function($) {
    return {
        name: 'Trismegistos Text',
        dataType: 'html',
        type: 'text',
        toDataUri: function(uri) {
            return uri;
        },
        parseData: function(html) {
            var getText = awld.accessor(html);
            return {
                name: getText('h1'),
                description: getText('table[results_table]'),
            };
        },
    };
});
