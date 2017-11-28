var guid = require('guid');

var listerners = {};

module.exports = {
    register:function(cb) {
        var id = guid.raw();
        listerners[id] = cb; //callback;
        return id;
    },
    dispatch:function(payload) {
        console.info("Dispatching...", payload);
        for (var id in listerners) {
            var listener = listerners[id];
            listener(payload);
        }
    }
}