// Module: Encyclopedia of Life API

define(['jquery'], function($) {
    return {
        name: 'EOL Entries',
        type: 'description',
        dataType: 'html',
        parseData: function(html) {
            var getText = awld.accessor(html);
            return {
                name: "EOL Entry",
                description: getText('#text_summary .copy'),
            };
        },
    };
});
