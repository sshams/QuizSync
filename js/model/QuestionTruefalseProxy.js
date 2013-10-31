
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
        this.database = model.Moodle.getMoodle();
    },
    
    select: function (id, success, fail) {
        var insertSQL = "SELECT * FROM question_truefalse WHERE id = ?";
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [id], success, fail);
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