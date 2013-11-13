
puremvc.define(
{
    name: 'model.QuestionTruefalseProxy',
    parent: puremvc.Proxy,

    constructor: function () {
        puremvc.Proxy.call(this, this.constructor.NAME, null);
    }
},
{
    database: null,

    onRegister: function (id, success, fail) {
        this.database = model.Moodle.getConnection();
    },
    
    select: function (id, success, fail) {
        var insertSQL = "SELECT * FROM question_truefalse WHERE id = ?";
<<<<<<< HEAD
        var values= [id];
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
=======
        var value = id;
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [value], success, fail);
>>>>>>> af46f3a931dcb0d54bb6a0a640ab0a7c4155e117
        });
    },

    insert: function (questiontruefalseVO, success, fail) {
        var insertSQL = 'INSERT INTO question_truefalse (question, trueanswer, falseanswer)' +
                        'VALUES (?,?,?)';
        var values = [questiontruefalseVO.question, questiontruefalseVO.trueanswer, questiontruefalseVO.falseanswer];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionTruefalseProxy'
}
);