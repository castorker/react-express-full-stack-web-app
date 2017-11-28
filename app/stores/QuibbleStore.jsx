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

    function getMaxId() {
        return quibbles.reduce((max, p) => p.id > max ? p.id : max, quibbles[0].id);
    }

    function addQuibble(quibble) {
        lastId = getMaxId();
        quibble.id = lastId + 1;
        // console.log(quibble.id);
        quibbles.push(quibble);
        triggerListeners();
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(quibbles);
        })
    };

    dispatcher.register(function (event) {
        var split = event.type.split(':');
        if (split[0] === 'quibble-entity') {
            switch (split[1]) {
            case "add":
                addQuibble(event.payload);
                break;
            }
        }
    });

    // Store API
    return {
        getAll: getAll,
        onChange: onChange
    }

}

module.exports = new QuibbleStore();