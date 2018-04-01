module.exports = function(app){

    var todoList = require("../controller/accountController");

    app.route('/')
        .get(todoList.homePage);

    app.route('/hello')
        .get(todoList.todo1);
}