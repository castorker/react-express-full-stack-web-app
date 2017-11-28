var dispatcher = require('./../dispatcher.js');

module.exports = {
    add:function(quibble) {
        dispatcher.dispatch({
            payload:quibble, 
            type:"quibble-entity:add"
        })
    }
};