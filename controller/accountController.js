var mongoose = require('mongoose'),
User = mongoose.model('users');

var users = new User({
    _id:new mongoose.Types.ObjectId(),
    nama:"user1",
  }); 
  
users.save(function(err,projects){
    console.log('ok');
});

exports.todo1 = function(req, res){
    User.find({}, function(err, penduduk) {
        if (err){
            res.send(err);
        }

        res.json(penduduk);
    });
}