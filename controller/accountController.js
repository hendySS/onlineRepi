var mongoose = require('mongoose'),
User = mongoose.model('users');

exports.todo1 = function(req, res){
    User.find({}, function(err, penduduk) {
        if (err){
            res.send(err);
        }

        res.json(penduduk);
    });
}