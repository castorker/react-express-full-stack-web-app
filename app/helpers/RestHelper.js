var $ = require('jquery');

module.exports = {
    get: function (url) {
        return new Promise(function (success, error) { // ES5 and ES6
            $.ajax({
                url: url,
                datatype: "json",
                success: success,
                error: error
            });
        });
    },
    post: function (url, data) {
        return new Promise(function (success, error) {
            $.ajax({
                url: url,
                type: "POST",
                data: data,
                success: success,
                error: error
            });
        });
    }
};