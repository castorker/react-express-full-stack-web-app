var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js');

function QuibbleStore() {
    var quibbles = [];

    helper.get('api/quibbles')
        .then(function (data) {
            quibbles = data;
            triggerListeners();
        });

    var listeners = [];

    function getAll() {
        return quibbles;
    }

    function getMaxId() { // ES6
        return quibbles.reduce((max, p) => p.id > max ? p.id : max, quibbles[0].id);
    }

    function addQuibble(quibble) {
        lastId = (quibbles.length === 0) ? 0 : getMaxId();
        quibble.id = lastId + 1;
        // console.log(quibble.id);
        quibbles.push(quibble);
        triggerListeners();

        helper.post('api/quibbles', quibble);
    }

    // ES6
    function deleteQuibble(quibble) {
        var index = quibbles.findIndex(function (_quibble) {
            return _quibble.id == quibble.id;
        });

        quibbles.splice(index, 1);
        triggerListeners();

        helper.del('api/quibbles/' + quibble.id);
    }

    // ES5
//        function deleteQuibble(quibble) { 
//            var index;
//            quibbles.filter(function(_quibble, _index) {
//                if (_quibble.id == quibble.id) {
//                    index = _index;
//                }
//            });
//            
//            quibbles.splice(index, 1);
//            triggerListeners();
//            
//            helper.del('api/quibbles/' + quibble.id);
//        }


    function toggleQuibbleFavorite(quibble, isFavorite) {
        var _quibble = quibbles.filter(function (q) {
            return q.id == quibble.id;
        })[0];
        _quibble.favorite = isFavorite || false;
        triggerListeners();

        helper.patch('api/quibbles/' + quibble._id, quibble);
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