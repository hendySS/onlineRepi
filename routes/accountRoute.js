module.exports = function(app){

    var todoList = require("../controller/accountController");
    
    app.route('/')
        .get(todoList.todo1);
}