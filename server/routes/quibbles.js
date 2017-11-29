module.exports = function (app) {

    var quibbles = [{
        id: 1,
        text: "I'd tell you a chemistry joke but I know I wouldn't get a reaction.",
        category: "Chemistry",
        favorite: true
        }, {
        id: 2,
        text: "Why don't programmers like nature? It has too many bugs.",
        category: "Technology",
        favorite: false
        }, {
        id: 3,
        text: "Sign on the door of an internet hacker. 'Gone Phishing'.",
        category: "Internet",
        favorite: true
        }, {
        id: 4,
        text: "A crazy programmer with a cold is a coughing hacker.",
        category: "Technology",
        favorite: false
        }];

    app.route('/api/quibbles')
        .get(function (req, res) {
            res.send(quibbles);
        })
        .post(function (req, res) {
            var quibble = req.body;
            quibbles.push(quibble);
        })
}