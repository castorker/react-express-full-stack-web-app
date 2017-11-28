var dispatcher = require('./../dispatcher.js');

function QuibbleStore() {
    // var quibbles = [];
    var quibbles = [{
        id: 1,
        text: "I'd tell you a chemistry joke but I know I wouldn't get a reaction.",
        category: "Chemistry",
        favorite: true
    },{
        id: 2,
        text: "Why don't programmers like nature? It has too many bugs.",
        category: "Technology", 
        favorite: false
    },{
        id: 3,
        text: "Sign on the door of an internet hacker. 'Gone Phishing'.",
        category: "Internet",
        favorite: true
    },{
        id: 4,
        text: "A crazy programmer with a cold is a coughing hacker.",
        category: "Technology", 
        favorite: false
    }];


    var listeners = [];

    function getAll() {
        return quibbles;
    }

    function getMaxId() {   // ES6
        return quibbles.reduce((max, p) => p.id > max ? p.id : max, quibbles[0].id);
    }

    function addQuibble(quibble) {
        lastId = getMaxId();
        quibble.id = lastId + 1;
        // console.log(quibble.id);
        quibbles.push(quibble);
        triggerListeners();
    }

    // ES6
    function deleteQuibble(quibble) {
        var index = quibbles.findIndex(function(_quibble) {
            return _quibble.id == quibble.id;
        });
        
        quibbles.splice(index, 1);
        triggerListeners();
    }

    // ES5
//    function deleteQuibble(quibble) { 
//        var index;
//        quibbles.filter(function(_quibble, _index) {
//            if (_quibble.id == quibble.id) {
//                index = _index;
//            }
//        });
//        
//        quibbles.splice(index, 1);
//        triggerListeners();
//    }
    
    
    function toggleQuibbleFavorite(quibble, isFavorite) {
        var _quibble = quibbles.filter(function(q) { return q.id == quibble.id})[0];
        _quibble.favorite = isFavorite || false;
        triggerListeners();
    }
    
    function onChange(listener) {
        listeners.push(listener);
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(quibbles);
        });
    }

    dispatcher.register(function (event) {
        var split = event.type.split(':');
        if (split[0] === 'quibble-entity') {
            switch (split[1]) {
                case "add":
                    addQuibble(event.payload);
                    break;
                case "delete":
                    deleteQuibble(event.payload);
                    break;
                case "favorite":
                    toggleQuibbleFavorite(event.payload, true);
                    break;
                case "unfavorite":
                    toggleQuibbleFavorite(event.payload, false);
                    break;
            }
        }
    });

    // Store API
    return {
        getAll: getAll,
        onChange: onChange
    };

}

module.exports = new QuibbleStore();