var mongoose = require('mongoose'),
User = mongoose.model('list');
/*
var users = new User({
    _id:new mongoose.Types.ObjectId(),
    nama:"Asadxz",
  }); 
  
users.save(function(err,projects){
    console.log('ok');
});
*/
exports.homePage = function(req, res){
    res.sendFile('./homePage.html', {root: 'public'});
}

exports.todo1 = function(req, res){
    User.find({}, function(err, penduduk) {
        if (err){
            res.send(err);
        }

        res.json(penduduk);
    });
}