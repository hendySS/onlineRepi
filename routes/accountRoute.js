module.exports = function(app){

    var todoList = require("../controller/accountController");

    app.route('/hello')
        .get(todoList.todo1);
}