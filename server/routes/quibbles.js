module.exports = function (app) {

    var QuibbleEntity = require('./../model/QuibbleEntity.js');

    app.route('/api/quibbles')
        .get(function (req, res) {
            QuibbleEntity.find(function (error, doc) {
                res.send(doc);
            });

        })
        .post(function (req, res) {
            var quibble = req.body;
            // console.log("Adding quibble: ", quibble);
            var quibbleEntity = new QuibbleEntity(quibble);
            quibbleEntity.save(function (err, data) {
                res.status(300).send();
            });
        });

    app.route('/api/quibbles/:id')
        .delete(function (req, res) {
            // console.log("Deleting quibble: ", req.params.id);
            QuibbleEntity.remove({
                id: req.params.id
            }, function (err) {
                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    res.json({
                        message: 'Quibble Deleted!'
                    });
                }
            });
        })
        .patch(function (req, res) {
            // console.log("Updating quibble: ", req.body.id);
            QuibbleEntity.findOne({
                id: req.body.id
            }, function (err, doc) {
                if (err) {
                    console.log(err);
                    // res.send(err);
                    res.status(404).send('Not Found');
                } else {
                    for (var key in req.body) {
                        doc[key] = req.body[key];
                    }
                    doc.save();
                    res.status(200).send();
                }
            });
        });
};