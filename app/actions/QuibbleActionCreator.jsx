var dispatcher = require('./../dispatcher.js');

module.exports = {
    add:function(quibble) {
        dispatcher.dispatch({
            payload:quibble, 
            type:"quibble-entity:add"
        })
    },
    delete:function(quibble) {
        dispatcher.dispatch({
            payload:quibble, 
            type:"quibble-entity:delete"
        })
    },
    favorite:function(quibble) {
        dispatcher.dispatch({
            payload:quibble, 
            type:"quibble-entity:favorite"
        })
    },
    unfavorite:function(quibble) {
        dispatcher.dispatch({
            payload:quibble, 
            type:"quibble-entity:unfavorite"
        })
    }
};